import { BlogWithoutDetailHeading, ImagePath } from "@/Constant";
import { BlodData } from "@/Data/Miscellaneous/Blog";
import { Card, Col, Row } from "reactstrap";

const BlogWithDetails = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      {BlodData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm="5">
              <img className="img-fluid sm-100-w" src={`${ImagePath}/blog/blog-${data.image}.jpg`} alt="images"/>
            </Col>
            <Col sm="7">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{data.date}</span> January 2023
                </div>
                <h5>{BlogWithoutDetailHeading}</h5>
                <div className="blog-bottom-content">
                  <ul className="blog-social">
                    <li className="rounded-0">by: Admin</li>
                    <li className="digits">{data.hits} Hits</li>
                  </ul>
                  <hr />
                  <p className="mt-0">A huge part of it is the incomparable beauty you can encounter every day.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogWithDetails;
