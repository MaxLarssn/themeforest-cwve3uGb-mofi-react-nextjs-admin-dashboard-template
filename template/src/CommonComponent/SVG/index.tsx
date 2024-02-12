import React from "react";

interface SvgType {
  iconId: string;
  className?: string;
  style?: {
    height: string;
    width: string;
    fill: string;
    marginRight: string;
  };
  onClick?: () => void;
}

const SVG = ({ iconId, className, style }: SvgType) => {
  return (
    <svg className={className} style={style}>
      <use href={`/assets/svg/icon-sprite.svg#${iconId}`}></use>
    </svg>
  );
};

export default SVG;
