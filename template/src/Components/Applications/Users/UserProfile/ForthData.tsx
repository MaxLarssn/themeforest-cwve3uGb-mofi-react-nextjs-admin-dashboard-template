import { Href, ImagePath } from "@/Constant";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const ForthData = () => {
  const ProfileData: string = "Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.";

  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader />
          <hr />
          <Row>
            <Col lg="12" xl="4">
              <div className="my-gallery">
                <Gallery withCaption>
                  <figure className="m-0">
                    <Item original={`${ImagePath}/blog/img.png`} width="1600" height="800" caption="Image Caption 1">
                      {({ ref, open }) => (
                        <a href={Href} onClick={open}>
                          <img className="img-fluid rounded" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/blog/img.png`} alt="image" />
                        </a>
                      )}
                    </Item>
                  </figure>
                </Gallery>
              </div>
              <CommonUserFooter listClass="mt-4 like-comment-sm-mb" />
            </Col>
            <Col xl="6">
              <p>{ProfileData}</p>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default ForthData;
