import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonButtons from "../CommonButtons/CommonButtons";
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, ExtraSmallButtonsHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from "@/Constant";
import { FlatBoldBorderOutlineButtonsData, FlatBoldBorderOutlineButtonsHeadingData, FlatButtonsData, FlatDisabledButtonsData, FlatDisabledButtonsHeadingData, FlatDisabledOutlineButtonsHeadingData, FlatExtraSmallButtonsData, FlatGraddienButtonsHeadingData, FlatGradientButtonsData, FlatOutlineButtonsData, FlatOutlineButtonsHeadingData, FlatOutlineDisabledButtonsData, FlatOutlineExtraSmallButtonsData, FlatOutlineExtraSmallButtonsHeadingData, FlatOutlineLargeButtonsData, FlatOutlineLargeButtonsHeadingData, FlatOutlineSmallButtonsData, FlatOutlineSmallButtonsHeadingData, FlateActiveButtonsData, FlateActiveButtonsHeadingData, FlateButtonsHeadingData, FlateExtraSmallButtonsHeadingData, FlateLargeButtonsData, FlateLargeButtonsHeadingData, FlateSmallButtonsData, FlateSmallButtonsHeadingData } from "@/Data/Buttons/FlatStyle";
import FlatCustomStateButton from "./CustomStateButton";

const FlatStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <CommonButtons className="btn-square" commonButtonsData={FlatButtonsData} title={DefaultButtonsHeading} subTitle={FlateButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlateLargeButtonsData} title={LargeButtonsHeading} subTitle={FlateLargeButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlateSmallButtonsData} title={SmallButtonsHeading} subTitle={FlateSmallButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatExtraSmallButtonsData} title={ExtraSmallButtonsHeading} subTitle={FlateExtraSmallButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlateActiveButtonsData} title={ActiveButtonsHeading} subTitle={FlateActiveButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatDisabledButtonsData} title={DisabledButtonsHeading} subTitle={FlatDisabledButtonsHeadingData} />
          <FlatCustomStateButton/>
          <CommonButtons className="btn-square" commonButtonsData={FlatOutlineButtonsData} title={OutlineButtonsHeading} subTitle={FlatOutlineButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatBoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={FlatBoldBorderOutlineButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatOutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={FlatOutlineLargeButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatOutlineSmallButtonsData} title={OutlineSmallButtonsHeading} subTitle={FlatOutlineSmallButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatOutlineExtraSmallButtonsData} title={OutlineExtraSmallButtonsHeading} subTitle={FlatOutlineExtraSmallButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatOutlineDisabledButtonsData} title={DisabledOutlineButtonsHeading} subTitle={FlatDisabledOutlineButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatGradientButtonsData} title={GradientButtonsHeading} subTitle={FlatGraddienButtonsHeadingData} />
        </Col>
      </Row>
    </Container>
  );
};

export default FlatStyleContainer;
