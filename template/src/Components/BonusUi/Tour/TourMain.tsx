import { Container, Row } from "reactstrap";
import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle";
import UserProfileFifthStyle from "./UserProfileFifthStyle";

const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfileFirstStyle />
            <UserProfileSecondStyle />
            <UserProfileThirdStyle />
            <UserProfileFourthStyle />
            <UserProfileFifthStyle />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourMain;
