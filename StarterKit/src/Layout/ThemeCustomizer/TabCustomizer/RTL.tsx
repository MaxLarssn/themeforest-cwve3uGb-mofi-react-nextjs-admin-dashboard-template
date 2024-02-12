import { RTLBadges } from '@/Constant'
import CommonUL from './CommonUL'
import { LtrDataType } from '@/Types/ThemeCustomizerTypes'
import { Badge } from 'reactstrap'

const RTL :React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li className={`${layout_type === "rtl" ? "active" : ""}`} onClick={() => handleLayout("rtl")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-light body">
            <Badge color="primary">{RTLBadges}</Badge>
          </li>
          <li className="bg-light sidebar"></li>
        </ul>
      </div>
    </li>
  )
}

export default RTL