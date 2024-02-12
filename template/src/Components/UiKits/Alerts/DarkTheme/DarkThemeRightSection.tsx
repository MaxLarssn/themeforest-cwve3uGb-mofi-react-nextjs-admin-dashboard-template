import { Href } from "@/Constant";
import { DarkThemeLists } from "@/Data/Uikits/alert";
import Link from "next/link";
import React, { Fragment } from "react";
import { Alert, Col } from "reactstrap";

export const DarkThemeRightSection = () => {
  return (
    <Col xl="6">
      <p className="mb-0 f-w-500">Warning Alert</p>
      <Alert color="warning">
        <p>{`This is a `}
          <Link className="alert-link text-white" href={Href}>warning alert</Link> with an example link.Check it out.
        </p>
      </Alert>
      {DarkThemeLists.map(({ title, color, className }, index) => (
        <Fragment key={index}>
          <p className="mb-0 f-w-500">{title}</p>
          <Alert color={color} className="dark">
            <p>This is a
              <Link className={`alert-link text-${className ? className : "light"} text-lowercase`} href={Href}>{title}</Link>
              with an example link.Check it out.
            </p>
          </Alert>
        </Fragment>
      ))}
    </Col>
  );
};
