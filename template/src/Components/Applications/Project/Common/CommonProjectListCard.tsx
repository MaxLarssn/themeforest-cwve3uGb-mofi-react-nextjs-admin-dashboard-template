import { Comment, Done, ImagePath, Issues, Resolved } from "@/Constant";
import { CommonProjectInterFace } from "@/Types/ProjectType";
import { Badge, Col, Progress, Row } from "reactstrap";

export const CommonProjectListCard :React.FC<CommonProjectInterFace> = ({ item }) => {
  return (
    <Col xxl="4" lg="4" md="6">
      <div className={`project-box ${item.progress === 100 ? "b-light1-success" : "b-light1-primary"}`}>
        <Badge color={item.badge === 'Done' ? 'success' : 'primary'}>{item.badge}</Badge>
        <h5 className="f-w-500">{item.title}</h5>
        <div className="d-flex">
          <img className="img-20 me-1 rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="" />
          <div className="flex-grow-1"><p>{item.sites}</p></div>
        </div>
        <p>{item.description}</p>
        <Row className="details">
          <Col xs="6"><span>{Issues} </span></Col>
          <Col xs="6" className={`txt-${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.issue}</Col>
          <Col xs="6"><span>{Resolved}</span></Col>
          <Col xs="6" className={`txt-${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.resolved}</Col>
          <Col xs="6"><span>{Comment}</span></Col>
          <Col xs="6" className={`txt-${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.comment}</Col>
        </Row>
        <div className="customers">
          <ul>
            <li className="d-inline-block"><img className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img1}`} alt="" /></li>
            <li className="d-inline-block"><img className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img2}`} alt="" /></li>
            <li className="d-inline-block"><img className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img3}`} alt="" /></li>
            <li className="d-inline-block ms-2"><p className="f-12">{`+${item.like} More`}</p></li>
          </ul>
        </div>
        <div className="project-status mt-4">
          <div className="d-flex mb-0">
            <p>{item.progress}%</p>
            <div className="flex-grow-1 text-end"><span>{Done}</span></div>
          </div>
          {item.progress === 100 ? <Progress className='sm-progress-bar' color='success' value={item.progress} style={{ height: '5px' }} /> : <Progress className='sm-progress-bar' animated striped color='primary' value={item.progress} style={{ height: '5px' }} />}
        </div>
      </div>
    </Col>
  );
};
