import { AnotherAction, Dropdown } from '@/Constant'
import { CommonDropDownPropsType } from '@/Types/ButtonType'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

const CommonDropDown:React.FC<CommonDropDownPropsType> = ({color,className}) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle color={color} caret className={className ?className:""}>{Dropdown}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{AnotherAction}</DropdownItem>
        <DropdownItem>{AnotherAction}</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default CommonDropDown