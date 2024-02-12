import { VariationSwitchList } from "@/Data/Form&Table/Form";
import React, { Fragment } from "react";
import { Input, Label } from "reactstrap";

export const VariationOfSwitcheTwo = () => {
  return (
    <>
      {VariationSwitchList.map(({ flexClass, text, color }, index) => (
        <Fragment key={index}>
          <li className="tg-list-item">
            <div className="d-flex">
              <div className={`flex-grow-1 text-end ${flexClass}`}>
                <Label className="switch mb-0 square-checked">
                  <Input type="checkbox" defaultChecked />
                  <span className={`switch-state bg-${color} rounded-2`}></span>
                </Label>
              </div>
            </div>
          </li>
          <li>
            <p>{text}</p>
          </li>
        </Fragment>
      ))}
    </>
  );
};
