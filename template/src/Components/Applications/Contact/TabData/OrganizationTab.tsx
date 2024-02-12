import  {  useCallback, useState } from 'react';
import { Row, Col, Card, CardBody, TabContent } from 'reactstrap';
import { Organization } from '@/Constant';
import NavOrg from './OrganicTab/NavOrg';
import TabOrg from './OrganicTab/TabOrg';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';

const OrganizationTab = () => {
  const [orgActiveTab, setOrgActiveTab] = useState('1');
  const callback = useCallback((tab:string) => {
    setOrgActiveTab(tab);
  }, []);

  return (
      <Card className="mb-0">
        <CommonCardHeader title={Organization} headClass='d-flex' /> 
        <CardBody className="p-0">
          <Row className="list-persons">
            <NavOrg callback={callback} />
            <Col xl="8" md="7" className='xl-50'>
              <TabContent activeTab={orgActiveTab}>
                <TabOrg />
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
  );
};

export default OrganizationTab;