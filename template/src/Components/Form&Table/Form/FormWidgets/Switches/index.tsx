import React from "react";
import { Container, Row } from "reactstrap";
import CustomSwitch from "./CustomSwitch";
import Iconsswitch from "./Iconsswitch";
import UncheckedSwitch from "./UncheckedSwitch";
import BordersWithIcons from "./BordersWithIcons";
import DisabledOutlineSwitch from "./DisabledOutlineSwitch";
import VariationOfSwitches from "./VariationOfSwitches";
import SwitchSizing from "./SwitchSizing";
import SwitchWithIcons from "./SwitchWithIcons";

const SwitchesContainer = () => {
  return (
    <Container fluid>
      <Row>
        <CustomSwitch />
        <Iconsswitch />
        <UncheckedSwitch />
        <BordersWithIcons />
        <DisabledOutlineSwitch />
        <VariationOfSwitches />
        <SwitchSizing />
        <SwitchWithIcons />
      </Row>
    </Container>
  );
};

export default SwitchesContainer;
