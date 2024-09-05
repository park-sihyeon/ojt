/** 생각하면서 작성 할 것들
 * 드래그 앤 드롭 사용 여부
 * 드래깅 여부
 * props
 * view component
 * list 및 list 순서 저장 어떤식으로 할지
 * 주석 자세히 달기
 */

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import CoreListView, { CoreListViewProps } from './core-list-view';

interface CoreDragAndDropViewProps<T>
  extends Omit<CoreListViewProps<T>, 'onRenderItem'> {
  // items, onRenderItem, onCreateUniqueKey, className
  enableDragAndDrop?: boolean; // 드래그 앤 드롭 기능을 활성화할지 여부를 결정
  dragDisabledList?: string[]; // 드래그가 비활성화된 항목을 지정 배열
  onChangeList?: (list: T[]) => void;
  containerClassName?: string;
  // isDragging을 굳이 사용해야될까? Omit해서 새로 정의한 이유가 isDragging을 사용하기 위함이면 여기선 지워두자
  onRenderItem: (
    item: T,
    index: number,
    id?: string,
    isDragging?: boolean
  ) => ReactNode;
}

const CoreDragAndDropListView = <T,>(props: CoreDragAndDropViewProps<T>) => {
  const {
    items,
    onRenderItem,
    onCreateUniqueKey,
    className,
    onChangeList,
    containerClassName,
    // enableDragAndDrop = true,
    dragDisabledList,
  } = props;

  //#region set list array
  const [list, setList] = useState(items);

  // items 배열 길이 변경 시 상태 업데이트 ㄱ
  useEffect(() => {
    if (items.length === list.length) return;
    console.log('시점 찾기 : ', list);
    setList(items);
  }, [items, list]);
  //#endregion

  //#region handle dnd
  const onDragEnd = (data: DropResult) => {
    if (!data.destination) return;
    // 영역을 벗어나서 드랍 시 리턴 시킴

    // 이동 시 새로운 리스트를 생성, 상태를 업데이트 / onChangeList 콜백 호출
    const newCompanyList = Array.from(list);

    const [moveOrder] = newCompanyList.splice(data.source.index, 1);
    newCompanyList.splice(data.destination.index, 0, moveOrder);

    // onChangeList 없으면 리턴 있으면 onChangeList 호출
    setList(newCompanyList);
    // if (!onChangeList) {
    //   return console.log('시점 찾기 : ', 3);
    // } else {
    //   onChangeList(newCompanyList);
    // }
    // onChangeList && onChangeList(newCompanyList);
    if (!onChangeList) {
      return;
    }
    onChangeList?.(newCompanyList);
  };
  //#endregion

  //#region template test 해보고 필요없으면 지우자
  // onCreateUniqueKey, onRenderItem이 변경될때 리렌더링
  const renderItem = useCallback(
    (item: T, index: number) => {
      const itemId = onCreateUniqueKey(item);
      // test 비활성 리스트 배열 지정
      const isDragDisabled = dragDisabledList?.some((item) => item === itemId);

      return (
        <Draggable
          key={itemId}
          draggableId={itemId}
          index={index}
          isDragDisabled={isDragDisabled}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                marginTop: '10px',
              }}
            >
              {onRenderItem(item, index, itemId, snapshot.isDragging || false)}
            </div>
          )}
        </Draggable>
      );
    },
    [onCreateUniqueKey, onRenderItem, dragDisabledList]
  );
  //#endregion

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              className={containerClassName || ''}
              {...provided.droppableProps}
            >
              <CoreListView
                className={className}
                items={list}
                onCreateUniqueKey={(item) => {
                  return onCreateUniqueKey(item);
                }}
                // onRenderItem={(item, index) => renderItem(item, index)}
                // dnd 가능 여부 test
                onRenderItem={(item, index) => renderItem(item, index)}
                // onRenderItem={(item, index) =>
                //   enableDragAndDrop
                //     ? renderItem(item, index)
                //     : onRenderItem(item, index)
                // }
              />
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default CoreDragAndDropListView;
