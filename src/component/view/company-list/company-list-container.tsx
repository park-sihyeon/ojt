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
import { useEffect, useState } from 'react';

interface CompanyListContainerProps {
  resumeKey: string;
}

const CompanyListContainer: React.FC<CompanyListContainerProps> = ({
  resumeKey,
}) => {
  //#region get local
  const { resumeId } = useParams<{ resumeId: string }>();
  const Formatting = resumeId?.replace(':', '');

  const { getResumeById } = useResumeStore();

  const { getCompanies, openModal, updateCompanyList } = useCompanyStore();
  const [companies, setCompanies] = useState<CompanyListDto[]>([]);
  // const [isEmty, setIsEmty] = useState(false);

  // 여기다가 get 해서 ㄱㄱ
  // if (!resumeId) return setIsEmty(true);
  // <div className={companyListContinerCss.wrapCompanyList}>
  //   이력서에 회사 경력이 없어ㅇㅅㅇ 추가해줘
  //   <AddCompanyListContent />
  // </div>

  useEffect(() => {
    const companyList = getCompanies(resumeKey);
    setCompanies(companyList);
  }, [resumeKey, getCompanies]);

  if (!Formatting)
    return (
      <div className={companyListContinerCss.wrapCompanyList}>
        이력서에 회사 경력이 없어ㅇㅅㅇ 추가해줘
        <AddCompanyListContent />
      </div>
    );
  // console.log('resumeId', resumeId);
  const resumeData = getResumeById(Formatting);
  console.log(resumeData?.companyLists, '너 먼데 자꾸?');
  console.log(resumeData?.resumeId, Formatting, 'id  비교');
  //#endregion

  const handleEditCompany = () => {
    openModal(resumeKey);
  };

  //#region handle delete
  const handleDeleteCompany = (companyId: string) => {
    const updatedCompanies = companies.filter(
      (company) => company.companyListId !== companyId
    );
    updateCompanyList(resumeKey, updatedCompanies);
    setCompanies(updatedCompanies);
  };
  //#endregion

  return (
    <>
      <div className={companyListContinerCss.wrapCompanyList}>
        <AddCompanyListContent />
        <div className={companyListContinerCss.dragAndDropSection}>
          {resumeData ? (
            <CoreDragAndDropListView
              // containerClassName={companyListContinerCss.flex}
              items={resumeData?.companyLists}
              // onChangeList={handleChangeList}
              onCreateUniqueKey={(item, i) => {
                return item.companyListId[i];
              }}
              onRenderItem={(item, index) => (
                <div>
                  <Accordion className={companyListContinerCss.accordrion}>
                    <div className="column">
                      <div>
                        {/* <p className="accordion-title">{item.title}</p>
                        <p className="accordion-period">{item.period}</p> */}
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
                      {/* <div>{item.content}</div> */}
                    </AccordionDetails>
                    <AccordionActions>
                      {/* <Button onClick={() => handleEditCompany(item, index)}>
                        수정
                      </Button> */}{' '}
                      {/* <Button
                        onClick={() => handleDeleteCompany(item.companyListId)}
                      >
                        삭제
                      </Button> */}
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
