import { companyListContinerCss } from './company-list-container.css';
import { AddCompanyListContent } from './add-company-list';
import { useEffect, useState } from 'react';
import { CompanyListDto } from '../../../../../script/dto/company-list-dto';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import CoreDragAndDropListView from '../../_core/core-drag-and-drop-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CompanyListContainer = () => {
  //#region get local
  useEffect(() => {
    const storedCompanyLists = localStorage.getItem('company-list');
    if (storedCompanyLists) {
      setCompanyLists(JSON.parse(storedCompanyLists));
    }
  }, []);

  const [companyList, setCompanyLists] = useState<CompanyListDto[]>([]);
  console.log('get company-list :', companyList);
  //#endregion

  //#region handle dnd
  const handleChangeList = () => {
    return console.log('wow');
  };
  const test = (d: CompanyListDto) => {
    return console.log('보고싶다 친구야!!ㄴ : ', d);
  };
  //#endregion
  return (
    <>
      <div className={companyListContinerCss.wrapCompanyList}>
        <AddCompanyListContent />
        <div>
          sad
          <CoreDragAndDropListView
            containerClassName={companyListContinerCss.flex}
            items={companyList}
            onChangeList={handleChangeList}
            onCreateUniqueKey={(item) => {
              test(item);
              return item.toString();
            }}
            onRenderItem={(item) => (
              <div>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    {/* test */}
                    {/* 회사명 / 기간 */}
                    <div>{item.title}</div>
                    <div>{item.period}</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* 업무내용 */}
                    <div>{item.content}</div>
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
