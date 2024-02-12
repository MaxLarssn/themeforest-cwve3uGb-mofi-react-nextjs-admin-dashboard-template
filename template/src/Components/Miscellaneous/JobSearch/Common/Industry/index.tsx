import  {  useState } from 'react';
import { Button, Card, Col, Collapse } from 'reactstrap';
import IndustryCheckBox from './IndustryCheckBox';
import HeaderWithIcon from '../HeaderWithIcon';
import { AllIndustries, IndustryHeading } from '@/Constant';

const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <HeaderWithIcon heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <IndustryCheckBox/>
            <Button block className='w-100 text-center' color='primary'>{AllIndustries}</Button>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Industry;
