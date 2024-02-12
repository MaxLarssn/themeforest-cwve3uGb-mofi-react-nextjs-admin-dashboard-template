import { Card, CardBody, CardHeader, Col } from "reactstrap";
import LiveMeetingBody from "./LiveMeetingBody";
import Link from "next/link";
import { LiveMeetingCardHeader } from "./LiveMeetingCardHeader";

const LiveMeeting = () => {
  return (
    <Col xl="4" md="6" className="proorder-md-5">
      <Card>
        <LiveMeetingCardHeader/>
        <CardBody className="live-meet">
          <LiveMeetingBody />
          <ul className="simple-list">
            <li><h5 className="text-truncate"><span>Class: </span>Technique of Drawing in One Line</h5></li>
            <li><h5 className="text-truncate"><span>Batch: </span>GDM (2/3)</h5></li>
            <li>
              <Link href="https://support.pixelstrap.com/ " target="_blank">
                <h5 className="font-primary text-truncate">
                  <span>Class Link: </span>https://support.pixelstrap.com/
                </h5>
              </Link>
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveMeeting;
