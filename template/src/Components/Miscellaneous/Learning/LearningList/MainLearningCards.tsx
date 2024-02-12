import { ImagePath } from "@/Constant";
import { MainLearningCardData } from "@/Data/Miscellaneous/Learning";
import { Card, Col, Row } from "reactstrap";

const MainLearningCards = () => {
  const LearningCardsDetails = "Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.";

  return (
    <>
      {MainLearningCardData.map((data, index) => (
        <Col xl="12" key={index}>
          <Card>
            <Row className="blog-box blog-list ">
              <Col sm="5">
                <img className="img-fluid sm-100-w" src={`${ImagePath}/faq/${index + 1}.jpg`} alt="blog-image" />
              </Col>
              <Col sm="7">
                <div className="blog-details">
                  <div className="blog-date">
                    <span>{data.dateSpan}</span> {data.date}
                  </div>
                  <h4 className="mb-1">{data.language}</h4>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li className="rounded-0">by: {data.learningCardBy}</li>
                      <li className="digits">{data.hits} Hits</li>
                    </ul>
                    <hr />
                    <p className="mt-0">{LearningCardsDetails}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MainLearningCards;
