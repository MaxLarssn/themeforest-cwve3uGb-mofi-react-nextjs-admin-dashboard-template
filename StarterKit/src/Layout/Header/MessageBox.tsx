import SVG from "@/CommonComponent/SVG";
import { CheckAll, Href, ImagePath, Messages } from "@/Constant";
import { MessageData } from "@/Data/Layout";
import Link from "next/link";
import { Badge } from "reactstrap";

export const MessageBox = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="header-message" />
        <Badge pill color="info">3</Badge>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h5 className="f-18 f-w-600 mb-0 dropdown-title">{Messages}</h5>
        <ul className="messages">
          {MessageData.map((item, index) => (
            <li className={`d-flex b-light1-${item.color} gap-2`} key={index}>
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-2/user/${item.image}`} alt="Graph" />
              </div>
              <div className="flex-grow-1">
                <Link href={Href}>
                  <h6 className={`font-${item.color} f-w-600`}>{item.title}</h6>
                </Link>
                {item.text}
              </div>
              <span>10 min.</span>
            </li>
          ))}
          <li><a className="f-w-700" href={Href}>{CheckAll}</a></li>
        </ul>
      </div>
    </li>
  );
};
