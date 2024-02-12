import { Href } from "@/Constant";
import { LightThemeList } from "@/Data/Uikits/alert";
import Link from "next/link";
import React, { Fragment } from "react";
import { Alert, Col } from "reactstrap";

export const LightThemeLeftSection = () => {
  return (
    <Col xl="6">
      <p className="mb-0 f-w-500">Primary Light Alert</p>
      <Alert color="light-primary">
        <p className="txt-primary">This is a
          <Link className="alert-link txt-primary" href={Href}> primary alert</Link>
          with an example link.Check it out.
        </p>
      </Alert>
      {LightThemeList.map((title, index) => (
        <Fragment key={index}>
          <p className="mb-0 f-w-500 text-capitalize">{title} Light Alert</p>
          <Alert className={`alert-light-${title} border-0`}>
            <p className={`txt-${title}`}>{`This is a `}
              <Link className={`alert-link txt-${title}`} href={Href}>{title} alert
              </Link> with an example link. Check it out.
            </p>
          </Alert>
        </Fragment>
      ))}
    </Col>
  );
};
