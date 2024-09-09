import { companyListContinerCss } from './company-list-container.css';
import { AddCompanyListContent } from './add-company-list';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import CoreDragAndDropListView from '../_common/_core/core-drag-and-drop-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { mockGetTest } from '../../../script/mock/company-list';

const CompanyListContainer = () => {
  //#region get local
  useEffect(() => {
    const storedCompanyLists = localStorage.getItem('company-list');
    if (storedCompanyLists) {
      setCompanyLists(JSON.parse(storedCompanyLists));
    }
  }, []);

  const [companyList, setCompanyLists] = useState(mockGetTest);
  //#endregion

  //#region handle dnd
  const handleChangeList = () => {};
  //#endregion

  return (
    <>
      <div className={companyListContinerCss.wrapCompanyList}>
        <AddCompanyListContent />
        <div className={companyListContinerCss.dragAndDropSection}>
          <CoreDragAndDropListView
            // containerClassName={companyListContinerCss.flex}
            items={companyList}
            onChangeList={handleChangeList}
            onCreateUniqueKey={(item, i) => {
              return item.companyLists[i].companyListId.toString();
            }}
            onRenderItem={(item, i) => (
              <div>
                <Accordion className={companyListContinerCss.accordrion}>
                  <div className="column">
                    <div>
                      <p className="accordion-title">
                        {item.companyLists[i].title || ''}
                      </p>
                      <p className="accordion-period">
                        {item.companyLists[i].period || ''}
                      </p>
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
                    <div>{item.companyLists[i].content || ''}</div>
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </AccordionActions>
                </Accordion>
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyListContainer;
