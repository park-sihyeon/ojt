import {
  // Button,
  ButtonGroup,
} from '@mui/material';
import { editButtonCss } from './edit-button.css';

export const EditButton = () => {
  return (
    <>
      <div>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <div className={editButtonCss.buttonPosition}>
            {/* <Button>저장</Button> */}
          </div>
          {/* <Button>삭제/Button> */}
        </ButtonGroup>

        {/* todo 저장,삭제 버튼 분기처리 */}
        {/* 위치값 넘겨받아서 position 처리 */}
        {/* <ButtonGroup variant="contained" aria-label="Basic button group"> */}
        {/* <Button>저장</Button> */}
        {/* <Button>삭제/Button> */}
        {/* </ButtonGroup> */}
      </div>
    </>
  );
};
