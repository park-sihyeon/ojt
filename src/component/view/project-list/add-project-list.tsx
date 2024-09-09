// 화면상으로 보기위해 생성

import { Box, Card, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ProjectListDto } from '../../../script/dto/project-list-dto';
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

  //#region handle regist projectlist
  const [projectList, setProjectList] = useState<ProjectListDto[]>([]);

  useEffect(() => {
    const storedResumeForms = localStorage.getItem('project-list');
    if (storedResumeForms) {
      setProjectList(JSON.parse(storedResumeForms));
    }
  }, []);

  const newSaveProjectList = (newProjectList: ProjectListDto) => {
    const updateProjectList = [...projectList, newProjectList];
    setProjectList(updateProjectList);
    localStorage.setItem('project-list', JSON.stringify(updateProjectList));
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
                <AddProjectModal
                  onProjectListSaved={newSaveProjectList}
                ></AddProjectModal>
              </Box>
            </Modal>
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
