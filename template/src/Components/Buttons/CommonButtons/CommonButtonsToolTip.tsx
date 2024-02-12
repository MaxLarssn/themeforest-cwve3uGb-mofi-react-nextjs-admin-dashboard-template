import { CommonButtonsToolTip } from '@/Types/ButtonType';
import { useState } from 'react'
import { Tooltip } from 'reactstrap';

const CommonButtonsToolTip:React.FC<CommonButtonsToolTip> = ({ id, toolTipText }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>{toolTipText}</Tooltip>
  )
}

export default CommonButtonsToolTip