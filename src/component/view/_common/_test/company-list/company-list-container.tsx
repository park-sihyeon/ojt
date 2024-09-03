import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import { companyListContinerCss } from './company-list-container.css';
import { AddCompanyListContent } from './add-company-list';

const CompanyListContainer = () => {
  // 여기다가 목 데이터 리스트 뿌려서 보자
  const itemList = ['1', '2', '3', '4', '5', '6'];

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    // destination => 드래그 끝난 위치, 위치가 처음과 같을 시 null

    // destination이 null일 때 리턴 시키기
    if (!destination) return;
    itemList.splice(source.index, 1);
    itemList.splice(destination?.index, 0, draggableId);
  };

  //mock data
  // list 부분만 리렌더링 시킬 수 있는지? (되것지 뭐)

  // 추가 시 가상 에러 케이스

  return (
    <>
      <div className={companyListContinerCss}>
        <AddCompanyListContent />
        {/*  */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppableId">
            {(provided) => (
              <ul
                // className={companyListContinerCss}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {itemList.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <div>{item}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default CompanyListContainer;
