import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonButtons from "../CommonButtons/CommonButtons";
import { EdgeActiveButtonsData, EdgeActiveButtonsHeadingData, EdgeBoldBorderOutlineButtonsData, EdgeBoldBorderOutlineButtonsHeadingData, EdgeDefaultButtonsData, EdgeDefaultButtonsHeadingData, EdgeDisabledButtonsData, EdgeDisabledButtonsHeadingData, EdgeDisabledOutlineButtonsHeadingData, EdgeExtraSmallButtonsData, EdgeExtraSmallButtonsHeadingData, EdgeGraddienButtonsHeadingData, EdgeGradientButtonsData, EdgeLargeButtonsData, EdgeLargeButtonsHeadingData, EdgeOutlineButtonsData, EdgeOutlineButtonsHeadingData, EdgeOutlineDisabledButtonsData, EdgeOutlineExtraSmallButtonsData, EdgeOutlineExtraSmallButtonsHeadingData, EdgeOutlineLargeButtonsData, EdgeOutlineLargeButtonsHeadingData, EdgeOutlineSmallButtonsData, EdgeOutlineSmallButtonsHeadingData, EdgeSmallButtonsData, EdgeSmallButtonsHeadingData } from "@/Data/Buttons/EdgeStyle";
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from "@/Constant";
import EdgeCustomStateButton from "./CustomStateButton";

const EdgeStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <CommonButtons className="btn-pill" commonButtonsData={EdgeDefaultButtonsData} title={DefaultButtonsHeading} subTitle={EdgeDefaultButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeLargeButtonsData} title={LargeButtonsHeading} subTitle={EdgeLargeButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeSmallButtonsData} title={SmallButtonsHeading} subTitle={EdgeSmallButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={EdgeExtraSmallButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeActiveButtonsData} title={ActiveButtonsHeading} subTitle={EdgeActiveButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeDisabledButtonsData} title={DisabledButtonsHeading} subTitle={EdgeDisabledButtonsHeadingData} />
          <EdgeCustomStateButton />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeOutlineButtonsData} title={OutlineButtonsHeading} subTitle={EdgeOutlineButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeBoldBorderOutlineButtonsData}  title={BoldBorderOutlineButtonsHeading} subTitle={EdgeBoldBorderOutlineButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeOutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={EdgeOutlineLargeButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeOutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={EdgeOutlineSmallButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeOutlineExtraSmallButtonsData}  title={OutlineExtraSmallButtonsHeading} subTitle={EdgeOutlineExtraSmallButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeOutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={EdgeDisabledOutlineButtonsHeadingData} />
          <CommonButtons className="btn-pill" commonButtonsData={EdgeGradientButtonsData} title={GradientButtonsHeading} subTitle={EdgeGraddienButtonsHeadingData} />
        </Col>
      </Row>
    </Container>
  );
};

export default EdgeStyleContainer;
