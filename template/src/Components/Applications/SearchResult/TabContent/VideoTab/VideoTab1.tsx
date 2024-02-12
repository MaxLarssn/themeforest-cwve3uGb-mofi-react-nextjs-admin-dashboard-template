import { Col } from "reactstrap";
import { AllAbout, Href } from "@/Constant";
import PagesSort from "../Pages";
import { SearchTabData } from "@/Data/Application/SearchResult";
import Link from "next/link";

const VideoTab1 = () => {
  return (
    <Col xxl="6">
      <h4 className="mb-2">{AllAbout}</h4>
      {SearchTabData.slice(0, 3).map((item) => (
        <div className="d-flex info-block" key={item.id}>
          <iframe className="me-3" width="200" height="100" src={item.videoLink} title="videos"></iframe>
          <div className="flex-grow-1">
            <Link href={Href}>{item.url}</Link>
            <h5>{item.title}</h5>
            <p>{item.detail}</p>
            <div className="star-ratings">
              <ul className="search-info">
                <li>{item.star}</li>
                <li>{item.vote}</li>
                <li>{item.news}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <PagesSort pageClass="start" />
    </Col>
  );
};

export default VideoTab1;