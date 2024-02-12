import { Href, ImagePath, MoreCommnets } from "@/Constant";
import Link from "next/link";
import IssaBellMessage from "./IssaBellMessage";
import JasonBorneMessage from "./JasonBorneMessage";
import OliviaJonMessage from "./OliviaJonMessage";

const SocialChat = () => {
  return (
    <div className="social-chat">
      <JasonBorneMessage />
      <div className="other-msg">
      <div className="d-flex">
          <img className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/2.png`}/>
          <div className="flex-grow-1">
            <span className="f-w-600">Alexendra Dhadio&nbsp;<span>1 Month Ago <i className="fa fa-reply font-primary" /></span></span>
            <p>yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)</p>
          </div>
        </div>
      </div>
      <OliviaJonMessage />
      <IssaBellMessage />
      <div className="text-center">
        <Link href={Href}>{MoreCommnets}</Link>
      </div>
    </div>
  );
};

export default SocialChat;
