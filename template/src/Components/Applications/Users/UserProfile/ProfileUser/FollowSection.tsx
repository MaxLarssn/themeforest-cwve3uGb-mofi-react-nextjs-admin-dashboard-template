import { SocialData } from '@/Data/Application/Users';
import CountUp from 'react-countup';
import { Col, Row } from "reactstrap";

const FollowSection = () => {
  return (
    <div className="follow">
      <Row>
        {SocialData.map((item, index) => (
          <Col xs="6 " className={item.class} key={index}>
           <CountUp end={item.count} className="follow-num counter" delay={1}/>
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FollowSection;
