/** 생각하면서 작성 할 것들
 * 드래그 앤 드롭 사용 여부
 * 드래깅 여부
 * props
 * view component
 * list 및 list 순서 저장 어떤식으로 할지
 * 주석 자세히 달기
 */

import {
  ReactNode,
  useCallback,
  // useCallback,
  useEffect,
  useState,
} from 'react';
import CoreListView, { CoreListViewProps } from './core-list-view';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';

interface CoreDragAndDropViewProps<T>
  extends Omit<CoreListViewProps<T>, 'onRenderItem'> {
  // items, onRenderItem, onCreateUniqueKey, className
  onChangeList: (list: T[]) => void;
  containerClassName?: string;
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
  } = props;

  //#region set list array
  const [list, setList] = useState(items);

  // items 배열 길이 변경 시 상태 업데이트 ㄱ
  useEffect(() => {
    if (list.length === list.length) return;
    console.log('시점 찾기 : ', 1);
    setList(items);
  }, [items, list]);
  //#endregion

  //#region handle dnd
  const onDragEnd = (data: DropResult) => {
    if (!data.destination) return;
    // 영역을 벗어나서 드랍 시 리턴 시킴
    console.log('시점 찾기 : ', 2);

    // 이동 시 새로운 리스트를 생성, 상태를 업데이트 / onChangeList 콜백 호출
    const newCompanyList = Array.from(list);

    const [moveOrder] = newCompanyList.splice(data.source.index, 1);
    newCompanyList.splice(data.destination?.index, 0, moveOrder);

    setList(newCompanyList);
    if (!onChangeList) {
      return console.log('시점 찾기 : ', 3);
    } else {
      onChangeList(newCompanyList);
    }
  };
  //#endregion

  //#region template
  const renderItem = useCallback(
    (item: T, index: number) => {
      const itemId = onCreateUniqueKey(item);

      return (
        <Draggable key={itemId} draggableId={itemId} index={index}>
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {onRenderItem(item, index, itemId)}
              </div>
            );
          }}
        </Draggable>
      );
    },
    [onCreateUniqueKey, onRenderItem]
  );
  //#endregion

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              className={containerClassName || ''}
              // style은 test에 지우자
              style={{
                backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
              }}
              {...provided.droppableProps}
            >
              <CoreListView
                className={className}
                items={list}
                onCreateUniqueKey={(item) => {
                  return onCreateUniqueKey(item);
                }}
                onRenderItem={(item, index) => renderItem(item, index)}
                // onRenderItem={(item, index) => {
                //   return (
                //     <Draggable
                //       key={onCreateUniqueKey(item)}
                //       draggableId={onCreateUniqueKey(item)}
                //       index={index}
                //     >
                //       {(provided) => (
                //         <div
                //           ref={provided.innerRef}
                //           {...provided.dragHandleProps}
                //         >
                //           hi my dear friend
                //         </div>
                //       )}
                //     </Draggable>
                //   );
                // }}
              />
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default CoreDragAndDropListView;
