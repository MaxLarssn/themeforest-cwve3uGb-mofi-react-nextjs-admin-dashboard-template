import { Href } from "@/Constant";
import { LightThemeLists } from "@/Data/Uikits/alert";
import Link from "next/link";
import React, { Fragment } from "react";
import { Alert, Col } from "reactstrap";

const LightThemeRightSection = () => {
  return (
    <Col xl="6">
      <p className="mb-0 f-w-500">Warning Light Alert</p>
      <Alert color="light-warning" className="border-0">
        <p className="txt-warning">{`This is a `}
          <Link className="alert-link txt-warning" href={Href}>warning alert</Link>
          with an example link. Check it out.
        </p>
      </Alert>
      {LightThemeLists.map(({title,color,className}, index) => (
        <Fragment key={index}>
          <p className="mb-0 f-w-500">{title}</p>
          <Alert color={color}>
            <p className={className}>{`This is a `}
              <Link className={`alert-link text-lowercase ${className}`} href={Href}>{title}</Link> with an example link. Check it out.
            </p>
          </Alert>
        </Fragment>
      ))}
    </Col>
  );
};

export default LightThemeRightSection;