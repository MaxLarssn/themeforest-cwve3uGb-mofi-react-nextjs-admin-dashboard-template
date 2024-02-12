import { Col } from "reactstrap";
import { AllAbout, Href } from "@/Constant";
import { SearchTabData } from "@/Data/Application/SearchResult";
import Link from "next/link";

const VideoTab2 = () => {
  return (
    <Col xxl="6">
      <h4 className="pb-4">{AllAbout}</h4>
      {SearchTabData.slice(1, 4).map((item) => (
        <div className="d-flex info-block" key={item.id}>
          <iframe className="me-3" width="200" height="100" src={item.videoLink} title="vodeos"></iframe>
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
    </Col>
  );
};

export default VideoTab2;
