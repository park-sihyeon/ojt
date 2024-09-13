import { companyListContinerCss } from './company-list-container.css';
import { AddCompanyListContent } from './add-company-list';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
} from '@mui/material';
import CoreDragAndDropListView from '../_common/_core/core-drag-and-drop-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CompanyListDto } from '../../../script/dto/company-list-dto';
import { useCompanyStore } from '../../../script/store/use-company-list-store';
import { useEffect, useState } from 'react';

interface CompanyListContainerProps {
  resumeKey: string;
}

const CompanyListContainer: React.FC<CompanyListContainerProps> = ({
  resumeKey,
}) => {
  const {
    getCompaniesByKey,
    updateCompanyList,
    isModalOpen,
    updateCompanyListOrder,
  } = useCompanyStore();
  const [companies, setCompanies] = useState<CompanyListDto[]>([]);
  const [isChange, setIsChange] = useState(false);
  const resumeData = companies;

  useEffect(() => {
    const companyList = getCompaniesByKey(resumeKey);
    setCompanies(companyList);
  }, [resumeKey, getCompaniesByKey, isModalOpen]);

  //#region handle delete
  const handleDeleteCompany = (companyId: string) => {
    const updatedCompanies = companies.filter(
      (company) => company.companyListId !== companyId
    );
    updateCompanyList(resumeKey, updatedCompanies);
    setCompanies(updatedCompanies);
  };
  //#endregion

  //#region handleChangeList
  const handleChangeList = (companyList: CompanyListDto[]) => {
    setIsChange(true);
    console.log(isChange, 'isChange');
    updateCompanyListOrder(resumeKey, companyList);
  };
  //#endregion

  return (
    <>
      <div className={companyListContinerCss.wrapCompanyList}>
        <AddCompanyListContent resumeKey={resumeKey} />
        <div className={companyListContinerCss.dragAndDropSection}>
          {!(resumeData && resumeData.length > 0) ? (
            <Paper className={companyListContinerCss.noneProjectList}>
              회사 목록이 없습니다. 추가해주세요!
            </Paper>
          ) : (
            <CoreDragAndDropListView
              containerClassName={companyListContinerCss.ulContent}
              items={resumeData}
              onChangeList={handleChangeList}
              onCreateUniqueKey={(item, i) => {
                return item.resumeKey[i];
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
                        ></AccordionSummary>
                      </div>
                    </div>
                    <AccordionDetails>
                      {/* 업무내용 */}
                      <div>{item.content}</div>
                    </AccordionDetails>
                    <AccordionActions>
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
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyListContainer;
