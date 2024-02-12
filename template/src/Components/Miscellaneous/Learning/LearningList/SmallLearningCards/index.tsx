import { ImagePath } from "@/Constant";
import { ImagePaths } from "@/Data/Miscellaneous/Learning";
import { Card, Col } from "reactstrap";
import BlogDetails from "./BlogDetails";

const SmallLearningCards = () => {
  return (
    <>
      {ImagePaths.map((data, index) => (
        <Col xl="4" sm="6" className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <img className="img-fluid top-radius-blog" src={`${ImagePath}/faq/${data.src}.jpg`} alt="faq" />
                <div className="product-hover">
                  <ul>
                    <li><i className="icon-link" /></li>
                    <li><i className="icon-import" /></li>
                  </ul>
                </div>
              </div>
              <BlogDetails text={data.text} title={data.title} />
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SmallLearningCards;
