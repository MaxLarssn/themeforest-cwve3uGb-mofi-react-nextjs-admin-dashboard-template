import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/Constant";
import React from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button } from "reactstrap";

export const UserSocialApp = () => {
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Button tag="a" color="light" href="https://www.linkedin.com/login" target="_blank">
          <Linkedin className="txt-linkedin" /> {LinkedInIcon}
        </Button>
        <Button tag="a" color="light" href="https://twitter.com/login?lang=en" target="_blank">
          <Twitter className="txt-twitter" />
          {TwitterIcon}
        </Button>
        <Button tag="a" color="light" href="https://www.facebook.com/" target="_blank">
          <Facebook className="txt-fb" />
          {FacebookIcon}
        </Button>
      </div>
    </div>
  );
};
