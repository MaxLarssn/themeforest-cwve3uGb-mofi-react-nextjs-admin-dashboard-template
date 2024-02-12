import { Button, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Dropdown, DropdownLink, Href } from "@/Constant";

export const StaticNesting = () => {
  return (
    <div className="m-b-30">
      <ButtonGroup>
        <Button color="primary"><i className="fa fa-bold"></i></Button>
        <Button color="secondary"><i className="fa fa fa-italic"></i></Button>
        <ButtonGroup>
          <UncontrolledDropdown>
            <DropdownToggle caret color="light">{Dropdown}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
};
