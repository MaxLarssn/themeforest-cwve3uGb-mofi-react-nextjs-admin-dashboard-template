import { Container, Row } from "reactstrap";
import DefaultLists from "./DefaultLists";
import ActiveLists from "./ActiveLists";
import FlushLists from "./FlushLists";
import ContextualClasses from "./ContextualClasses";
import HorizontalLists from "./HorizontalLists";
import CustomContentLists from "./CustomContentLists";
import ListsWithCheckbox from "./ListsWithCheckbox";
import ListsWithRadios from "./ListsWithRadios";
import ListsWithNumbers from "./ListsWithNumbers";
import JavaScriptBehavior from "./JavaScriptBehavior";
import NumberedBadgeLists from "./NumberedBadgeLists";
import DisabledLists from "./DisabledLists";
import ScrollableLists from "./ScrollableLists";

const ListContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultLists />
        <ActiveLists />
        <FlushLists />
        <ContextualClasses />
        <HorizontalLists />
        <CustomContentLists />
        <ListsWithCheckbox />
        <ListsWithRadios />
        <ListsWithNumbers />
        <JavaScriptBehavior />
        <NumberedBadgeLists />
        <DisabledLists />
        <ScrollableLists />
      </Row>
    </Container>
  );
};

export default ListContainer;
