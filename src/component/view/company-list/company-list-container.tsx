import { companyListContinerCss } from './company-list-container.css';
import { AddCompanyListContent } from './add-company-list';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import CoreDragAndDropListView from '../_common/_core/core-drag-and-drop-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import { useResumeStore } from '../../../script/store/use-resume-store';
import { CompanyListDto } from '../../../script/dto/company-list-dto';
import { useCompanyStore } from '../../../script/store/use-company-list-store';
import { useEffect } from 'react';

const CompanyListContainer = () => {
  //#region get local
  const { resumeId } = useParams<{ resumeId: string }>();
  const { getResumeById } = useResumeStore();
  const { deleteCompany, companys } = useCompanyStore();

  // 여기다가 get 해서 ㄱㄱ
  useEffect(() => {
    if (resumeId) {
      // const test = companys;
      console.log('작업끝나고 여기 정리하는거 잊지마!!');
    } else {
      console.log('없으면 등록 해');
    }
  }, [companys]);

  if (!resumeId)
    return (
      <div>
        이력서에 회사 경력이 없어ㅇㅅㅇ 추가해줘
        <AddCompanyListContent />
      </div>
    );
  const resumeData = getResumeById(resumeId);
  //#endregion

  //#region etc
  const handleEditCompany = (item: CompanyListDto) => {
    // 수정 시 모달 어픈
    //  그냥 모달 오픈만 하고 거기서 그냥 수정 처리해 오카이?
    console.log('컨설 수정 모달 오쁜', item);
  };
  //#endregion

  //#region handle delete
  const handleDeleteCompany = (id: string) => {
    deleteCompany(id);
  };
  //#endregion

  return (
    <>
      <div className={companyListContinerCss.wrapCompanyList}>
        <AddCompanyListContent />
        <div className={companyListContinerCss.dragAndDropSection}>
          {resumeData && resumeData.companyLists.length > 0 ? (
            <CoreDragAndDropListView
              // containerClassName={companyListContinerCss.flex}
              items={resumeData?.companyLists}
              // onChangeList={handleChangeList}
              onCreateUniqueKey={(item, i) => {
                return item.companyListId[i];
              }}
              onRenderItem={(item) => (
                <div>
                  <Accordion className={companyListContinerCss.accordrion}>
                    <div className="column">
                      <div>
                        <p className="accordion-title">{item.title}</p>
                        <p className="accordion-period">{item.period}</p>
                        <div className={companyListContinerCss.hamburger}>
                          <span className="line" />
                          <span className="line" />
                          <span className="line" />
                        </div>
                      </div>
                      <div className={companyListContinerCss.flex}>
                        <p>상세 보기</p>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon sx={{ width: 30 }} />}
                          aria-controls="panel3-content"
                          id="panel3-header"
                        >
                          {' '}
                          {/* test */}
                          {/* 회사명 / 기간 */}
                        </AccordionSummary>
                      </div>
                    </div>
                    <AccordionDetails>
                      {/* 업무내용 */}
                      <div>{item.content}</div>
                    </AccordionDetails>
                    <AccordionActions>
                      <Button onClick={() => handleEditCompany(item)}>
                        수정
                      </Button>
                      //{' '}
                      <Button
                        onClick={() => handleDeleteCompany(item.companyListId)}
                      >
                        삭제
                      </Button>
                    </AccordionActions>
                  </Accordion>
                </div>
              )}
            />
          ) : (
            <div>회사목록이 없습니다 추가해주세요!!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyListContainer;
