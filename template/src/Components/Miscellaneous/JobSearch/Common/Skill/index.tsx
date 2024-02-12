import  { useState } from 'react';  
import { Button, Card,  Col,  Collapse } from 'reactstrap';
import SkillCheckBox from './SkillCheckBox';
import HeaderWithIcon from '../HeaderWithIcon';
import { AllSkills, SpecificSkills } from '@/Constant';

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <HeaderWithIcon heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <SkillCheckBox/>            
            <Button block className='text-center w-100' color='primary'>{AllSkills}</Button>
          </Collapse>
        </Card>
      </Col>
  );
};

export default SkillClass;
