// 화면상으로 보기위해 생성

import { Box, Card, Modal } from '@mui/material';
import { addCompanyListCss } from './add-company-list.css';
import React from 'react';
import { AddCompanyModal } from './modal/add-company-modal';
// import { CompanyListDto } from '../../../script/dto/company-list-dto';

export const AddCompanyListContent = () => {
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
              className={addCompanyListCss.wrapAddResumeContent}
              onClick={handleOpen}
            >
              <div className={addCompanyListCss.addButton}>
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
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                }}
              >
                <AddCompanyModal></AddCompanyModal>
              </Box>
            </Modal>
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
