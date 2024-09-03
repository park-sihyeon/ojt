// 화면상으로 보기위해 생성

import { Box, Card, Modal } from '@mui/material';
import { addCompanyListCss } from './add-company-list.css';
import React from 'react';

export const AddCompanyListContent = () => {
  //#region handle modal

  //#region company list 표시

  //#endregion
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
        <Box sx={{ width: '100%' }}>
          <Card
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={addCompanyListCss.wrapAddResumeContent}
              onClick={handleOpen}
            >
              <div className={addCompanyListCss.addButton}>
                <span className="column" />
                <span className="row" />
              </div>
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
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
