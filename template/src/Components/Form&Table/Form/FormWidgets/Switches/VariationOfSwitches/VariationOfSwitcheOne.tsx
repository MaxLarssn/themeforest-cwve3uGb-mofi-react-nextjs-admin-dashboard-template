import { VariationSwitchDataList } from "@/Data/Form&Table/Form";
import React, { Fragment } from "react";
import { Input, Label } from "reactstrap";

export const VariationOfSwitcheOne = () => {
  return (
    <>
      {VariationSwitchDataList.map(({ id, inputClass, text,offData,onData }, index) => (
        <Fragment key={index}>
          <li className="tg-list-item">
            <Input className={`tgl ${inputClass}`} id={id} type="checkbox" />
            <Label className="tgl-btn" data-tg-off={offData} data-tg-on={onData}  htmlFor={id}></Label>
          </li>
          <li>
            <p>{text}</p>
          </li>
        </Fragment>
      ))}
    </>
  );
};
