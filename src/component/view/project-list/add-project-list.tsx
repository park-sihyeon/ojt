// 화면상으로 보기위해 생성

import { Box, Card, Modal } from '@mui/material';
import React from 'react';
import { AddProjectModal } from './modal/add-project-modal';
import { addProjectListCss } from './add-project-list.css';

export const AddProjectListContent = () => {
  //#region handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //#endregion
  return (
    <>
      <div>
        <Box sx={{ width: '80vw' }}>
          <Card
            style={{
              minHeight: '140px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={addProjectListCss.wrapAddResumeContent}
              onClick={handleOpen}
            >
              <div className={addProjectListCss.addButton}>
                <span className="column" />
                <span className="row" />
              </div>
            </div>
            <Modal
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              open={open}
              onClose={handleClose}
            >
              <Box
                sx={{
                  width: '94vw',
                  height: '80vh',
                  // borderTopRightRadius: 15,
                  // borderTopLeftRadius: 15,
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                  overflow: 'scroll',
                }}
              >
                <AddProjectModal></AddProjectModal>
              </Box>
            </Modal>
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
