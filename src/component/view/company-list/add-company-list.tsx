// 화면상으로 보기위해 생성

import { Box, Card, Modal } from '@mui/material';
import { addCompanyListCss } from './add-company-list.css';
import React, { useEffect, useState } from 'react';
import { AddCompanyModal } from './modal/add-company-modal';
import { CompanyListDto } from '../../../script/dto/company-list-dto';

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

  //#region handle regist companylist
  const [companyList, setCompanyList] = useState<CompanyListDto[]>([]);

  useEffect(() => {
    const storedResumeForms = localStorage.getItem('company-list');
    if (storedResumeForms) {
      setCompanyList(JSON.parse(storedResumeForms));
    }
  }, []);

  const newSaveCompanyList = (newCompanyList: CompanyListDto) => {
    const updateCompanyList = [...companyList, newCompanyList];
    setCompanyList(updateCompanyList);
    localStorage.setItem('company-list', JSON.stringify(updateCompanyList));
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
                  // borderTopRightRadius: 15,
                  // borderTopLeftRadius: 15,
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                }}
              >
                <AddCompanyModal
                  onCompanyListSaved={newSaveCompanyList}
                ></AddCompanyModal>
              </Box>
            </Modal>
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
