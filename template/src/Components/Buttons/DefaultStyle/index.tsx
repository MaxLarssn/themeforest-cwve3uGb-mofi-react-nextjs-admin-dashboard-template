import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonButtons from "../CommonButtons/CommonButtons";
import { ActiveButtonsData, ActiveButtonsHeadingData, BoldBorderOutlineButtonsData, BoldBorderOutlineButtonsHeadingData, DefaultButtonsData, DefaultButtonsHeadingData, DisabledButtonsData, DisabledButtonsHeadingData, DisabledOutlineButtonsHeadingData, ExtraSmallButtonsData, ExtraSmallButtonsHeadingData, GraddienButtonsHeadingData, GradientButtonsData, LargeButtonsData, LargeButtonsHeadingData, OutlineButtonsData, OutlineButtonsHeadingData, OutlineDisabledButtonsData, OutlineExtraSmallButtonsData, OutlineExtraSmallButtonsHeadingData, OutlineLargeButtonsData, OutlineLargeButtonsHeadingData, OutlineSmallButtonsData, OutlineSmallButtonsHeadingData, SmallButtonsData, SmallButtonsHeadingData } from "@/Data/Buttons/DefaultStyle";
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from "@/Constant";
import DefualtCustomStateButton from "./CustomStateButton";

const DefaultStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonsHeading} subTitle={DefaultButtonsHeadingData} />
          <CommonButtons commonButtonsData={LargeButtonsData} title={LargeButtonsHeading} subTitle={LargeButtonsHeadingData} />
          <CommonButtons commonButtonsData={SmallButtonsData} title={SmallButtonsHeading} subTitle={SmallButtonsHeadingData} />
          <CommonButtons commonButtonsData={ExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={ExtraSmallButtonsHeadingData} />
          <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
          <CommonButtons commonButtonsData={DisabledButtonsData} title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} className="text-white"/>
          <DefualtCustomStateButton />
          <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
          <CommonButtons commonButtonsData={BoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData}/>
          <CommonButtons commonButtonsData={OutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={OutlineLargeButtonsHeadingData} />
          <CommonButtons commonButtonsData={OutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={OutlineSmallButtonsHeadingData} />
          <CommonButtons commonButtonsData={OutlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={OutlineExtraSmallButtonsHeadingData} />
          <CommonButtons commonButtonsData={OutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={DisabledOutlineButtonsHeadingData} />
          <CommonButtons commonButtonsData={GradientButtonsData} title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultStyleContainer;
