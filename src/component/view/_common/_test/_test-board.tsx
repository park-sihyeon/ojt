import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pange/dnd';
import { useBoardStore } from './boardStore';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  content: z.string().min(1, '내용을 입력해주세요'),
});

const BoardList: React.FC = () => {
  const { boards, addBoard, deleteBoard, updateBoardOrder } = useBoardStore();
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    addBoard(data);
    reset();
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newBoards = Array.from(boards);
    const [reorderedBoard] = newBoards.splice(result.source.index, 1);
    newBoards.splice(result.destination.index, 0, reorderedBoard);

    const updatedBoards = newBoards.map((board, index) => ({
      ...board,
      index,
    }));

    updateBoardOrder(updatedBoards);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('title')} label="제목" />
        <TextField {...register('content')} label="내용" multiline />
        <Button type="submit">게시판 추가</Button>
      </form>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="boards">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {boards.map((board, index) => (
                <Draggable key={board.id} draggableId={board.id} index={index}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardContent>
                        <Typography variant="h5">{board.title}</Typography>
                        <Typography>{board.content}</Typography>
                        <Button onClick={() => deleteBoard(board.id)}>
                          삭제
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BoardList;
