import { Href } from "@/Constant";
import { DarkThemeList } from "@/Data/Uikits/alert";
import Link from "next/link";
import React, { Fragment } from "react";
import { Alert, Col } from "reactstrap";

export const DarkThemeLeftSection = () => {
  return (
    <Col xl="6">
      <p className="mb-0 f-w-500">Primary Alert</p>
      <Alert color="primary">
        <p>{`This is a `}<Link className="alert-link text-white" href={Href}>primary alert</Link>{` with an example link.Check it out.`}</p>
      </Alert>
      {DarkThemeList.map(({ title, color }, index) => (
        <Fragment key={index}>
          <p className="mb-0 f-w-500">{title}</p>
          <Alert color={color} className="dark">
            <p>{`This is a `}<a className="alert-link text-white text-lowercase" href={Href}>{title}</a>{` with an example link.Check it out.`}</p>
          </Alert>
        </Fragment>
      ))}
    </Col>
  );
};
