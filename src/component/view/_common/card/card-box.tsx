import { CardContent, Card, Typography } from '@mui/material';
import { cardBoxCss } from './card-box.css';
import { Link, useNavigate } from 'react-router-dom';
import { ResumeForm } from '../../../../script/dto/input-form-dto';
import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import { ResumeListContainerCss } from '../../resume-list/resume-list-container.css';

const CardBox = () => {
  //#region local get
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/resume');
  };

  useEffect(() => {
    const storedResumeForms = localStorage.getItem('resumes');
    if (storedResumeForms) {
      setResumeForms(JSON.parse(storedResumeForms));
    }
  }, []);

  const [resumeForms, setResumeForms] = useState<ResumeForm[]>([]);

  console.log('로컬이양 :', resumeForms);
  //#endregion
  // dragableId type 수정 필요
  //#region 드래그 앤 드랍

  const onDragEnd = ({ source, destination }: DropResult) => {
    // destination => 드래그 끝난 위치, 위치가 처음과 같을 시 null

    // destination이 null일 때 리턴 시키기
    if (!destination) return;
    resumeForms.splice(source.index, 1);
    resumeForms.splice(destination?.index, 0);
  };
  //#endregion

  //#region fomatting
  // const date = (data: string) => {
  //   if (data === null) {
  //     return;
  //   }
  //   const date = data.slice();
  //   return date;
  // };
  //#endregion

  return (
    <>
      <div className={ResumeListContainerCss.listContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppableId">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {resumeForms.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <Link to="/resume">
                          <li onClick={handleNavigate}>
                            <Card className={cardBoxCss.cardContainer}>
                              <div className={cardBoxCss.hamburger}>
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                              </div>
                              <CardContent>
                                {/* drag and drop icon */}
                                {/* 이후 아이콘으로 바꿔 */}
                                <Typography
                                  variant="h5"
                                  color="text.secondry"
                                  component="div"
                                >
                                  <b>{item.name}</b>
                                  <br />
                                  <br />
                                </Typography>
                                <Typography variant="body2" component="div">
                                  {/* <div>`${date(item.date)}`</div> */}
                                  <div>{item.date}</div>
                                </Typography>
                              </CardContent>
                            </Card>
                          </li>
                        </Link>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default CardBox;

//  {resumeForms.map((resumeForm) =>
//   !resumeForms ? (
//     console.log(resumeForms)
//   ) : (
//     <li onClick={handleNavigate}>
//       <Card className={cardBoxCss.cardContainer}>
//         <div className={cardBoxCss.hamburger}>
//           <span className="line" />
//           <span className="line" />
//           <span className="line" />
//         </div>
//         <CardContent>
//           {/* drag and drop icon */}
//           {/* 이후 아이콘으로 바꿔 */}
//           <Typography variant="h5" color="text.secondry" component="div">
//             <b>{resumeForm.name}</b>
//             <br />
//             <br />
//           </Typography>
//           <Typography variant="body2" component="div">
//             {/* todo 마지막 편집 시간 */}
//             {/* 화면 구성 확인하려 넣은 코드 이후 삭제 필요 */}
//             최종편집 일시 : 9999년 99월 99일
//           </Typography>
//         </CardContent>
//       </Card>
//     </li>
//   )
// )}
