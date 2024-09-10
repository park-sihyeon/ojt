// 화면상으로 보기위해 생성

import { Box, Card, Modal } from '@mui/material';
import { addCompanyListCss } from './add-company-list.css';
import { AddCompanyModal } from './modal/add-company-modal';
import { useCompanyStore } from '../../../script/store/use-company-list-store';

export const AddCompanyListContent = () => {
  //#region handle modal

  const { isModalOpen, closeModal, openModal } = useCompanyStore();

  const handleOpen = () => {
    openModal(-1); // -1은 새로운 회사 추가
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
              open={isModalOpen}
              onClose={closeModal}
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
