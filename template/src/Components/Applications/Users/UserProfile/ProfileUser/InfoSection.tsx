import { Col, Row } from "reactstrap";
import { Href } from "@/Constant";
import { UserAddressData, UserProfileData } from "@/Data/Application/Users";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

export const InfoSection = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Row className="g-3">
      <Col sm="6" lg="4" className="order-sm-1 order-xl-0">
        <Row className="g-3">
          {UserProfileData.map(({ iconClass, text, spanText }, index) => (
            <Col md="6" key={index}>
              <div className="ttl-info text-start">
                <h6 className="mb-1"><i className={`fa fa-${iconClass} me-2`}></i>{text}</h6>
                <span className="text-truncate w-100">{spanText}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
      <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
        <div className="user-designation">
          <div className="title">
            <Link target="_blank" href={`/${i18LangStatus}/users/user_profile`}>Mark jecno</Link>
          </div>
          <div className="desc">designer</div>
        </div>
      </Col>
      <Col sm="6" lg="4" className="order-sm-2 order-xl-2">
        <Row className="g-3">
          {UserAddressData.map(({ iconClass, text, spanText }, index) => (
            <Col md="6" key={index}>
              <div className="ttl-info text-start">
                <h6 className="mb-1"><i className={`fa fa-${iconClass}`}></i>{text}</h6>
                <span>{spanText}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};