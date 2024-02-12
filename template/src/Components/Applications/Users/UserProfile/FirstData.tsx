import { Href, ImagePath } from "@/Constant";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const FirstData = () => {
  const ProfileData: string = "Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.";

  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader />
          <hr />
          <p>{ProfileData}</p>
          <div className="img-container">
            <div className="my-gallery w-100" id="aniimated-thumbnials" itemScope>
              <Gallery withCaption>
                <figure className="m-0">
                  <Item original={`${ImagePath}/other-images/profile-style-img3.png`} width="1600" height="800" caption="Image Caption 1">
                    {({ ref, open }) => (
                      <a href={Href} onClick={open}>
                        <img className="img-fluid rounded" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/other-images/profile-style-img3.png`} alt="image" />
                      </a>
                    )}
                  </Item>
                </figure>
              </Gallery>
            </div>
          </div>
          <CommonUserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default FirstData;
