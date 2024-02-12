import { ImagePath, WeAreComingSoon } from "@/Constant";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";

const CommingSoonBgImageContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <img src={`${ImagePath}/other-images/logo-login.png`} alt="coming soon" />
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommingSoonBgImageContainer;
