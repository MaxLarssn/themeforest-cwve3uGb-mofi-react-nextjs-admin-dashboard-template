import { MixLayoutComponentProp } from '@/Types/ThemeCustomizerTypes'
import CommonUL from './CommonUL'

const BgLight :React.FC<MixLayoutComponentProp> = ({ handleCustomizerMix_Background, mixLayout }) => {
  return (
    <li className={`color-layout border-0 ${mixLayout === "dark-sidebar" ? "active" : ""}`} data-attr="dark-sidebar" onClick={() => handleCustomizerMix_Background("dark-sidebar")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar"></li>
          <li className="bg-light body"></li>
        </ul>
      </div>
    </li>
  )
}

export default BgLight