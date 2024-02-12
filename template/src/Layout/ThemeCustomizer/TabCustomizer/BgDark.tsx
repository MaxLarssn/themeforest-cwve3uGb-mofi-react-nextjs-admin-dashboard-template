import { MixLayoutComponentProp } from '@/Types/ThemeCustomizerTypes'
import CommonUL from './CommonUL'
import React from 'react'

const BgDark :React.FC<MixLayoutComponentProp> = ({ handleCustomizerMix_Background, mixLayout }) => {
  return (
    <li className={`color-layout border-0 ${mixLayout === "dark-only" ? "active" : ""}`} data-attr="dark-only" onClick={() => handleCustomizerMix_Background("dark-only")}>
      <div className="header bg-dark">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar"></li>
          <li className="bg-dark body"> </li>
        </ul >
      </div>
    </li>
  )
}

export default BgDark