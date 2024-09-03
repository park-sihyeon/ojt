import { Box, Button, Modal } from '@mui/material';
import * as React from 'react';
import { testModalCss } from './_test-modal.css';

// validtion check 함수는 해당 파일에서 react-hook-form / zod 사용해서 체크x
function TestModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <div className={testModalCss.openButton}>
          <Button onClick={handleOpen}>open</Button>
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              width: '100%',
              height: '90vh',
              // borderTopRightRadius: 15,
              // borderTopLeftRadius: 15,
              borderRadius: '15',
              backgroundColor: '#fff',
            }}
          >
            <p>test</p>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default TestModal;
