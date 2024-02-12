import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonButtons from "../CommonButtons/CommonButtons";
import { RaisedActiveButtonsData, RaisedActiveButtonsHeadingData, RaisedBoldBorderOutlineButtonsData, RaisedBoldBorderOutlineButtonsHeadingData, RaisedDefaultButtonsData, RaisedDefaultButtonsHeadingData, RaisedDisabledButtonsData, RaisedDisabledButtonsHeadingData, RaisedDisabledOutlineButtonsHeadingData, RaisedExtraSmallButtonsData, RaisedExtraSmallButtonsHeadingData, RaisedGraddienButtonsHeadingData, RaisedGradientButtonsData, RaisedLargeButtonsData, RaisedLargeButtonsHeadingData, RaisedOutlineButtonsData, RaisedOutlineButtonsHeadingData, RaisedOutlineDisabledButtonsData, RaisedOutlineExtraSmallButtonsData, RaisedOutlineExtraSmallButtonsHeadingData, RaisedOutlineLargeButtonsData, RaisedOutlineLargeButtonsHeadingData, RaisedOutlineSmallButtonsData, RaisedOutlineSmallButtonsHeadingData, RaisedSmallButtonsData, RaisedSmallButtonsHeadingData } from "@/Data/Buttons/RaisedStyle";
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from "@/Constant";
import EdgeCustomStateButton from "./CustomStateButton";

const RaisedStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedDefaultButtonsData} title={DefaultButtonsHeading} subTitle={RaisedDefaultButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedLargeButtonsData} title={LargeButtonsHeading} subTitle={RaisedLargeButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedSmallButtonsData} title={SmallButtonsHeading} subTitle={RaisedSmallButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={RaisedExtraSmallButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedActiveButtonsData} title={ActiveButtonsHeading} subTitle={RaisedActiveButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedDisabledButtonsData} title={DisabledButtonsHeading} subTitle={RaisedDisabledButtonsHeadingData} />
          <EdgeCustomStateButton/>
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedOutlineButtonsData} title={OutlineButtonsHeading} subTitle={RaisedOutlineButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedBoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={RaisedBoldBorderOutlineButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedOutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={RaisedOutlineLargeButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedOutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={RaisedOutlineSmallButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedOutlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={RaisedOutlineExtraSmallButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedOutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={RaisedDisabledOutlineButtonsHeadingData} />
          <CommonButtons raised className="btn-pill" commonButtonsData={RaisedGradientButtonsData} title={GradientButtonsHeading} subTitle={RaisedGraddienButtonsHeadingData} />
        </Col>
      </Row>
    </Container>
  );
};

export default RaisedStyleContainer;