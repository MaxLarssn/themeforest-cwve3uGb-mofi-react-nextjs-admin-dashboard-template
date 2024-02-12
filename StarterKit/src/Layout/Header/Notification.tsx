import SVG from "@/CommonComponent/SVG";
import { CheckAll, Href, ImagePath, NotiFications } from "@/Constant";
import { NotificationData } from "@/Data/Layout";
import Link from "next/link";
import { Badge } from "reactstrap";

export const Notification = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="notification" />
        <Badge pill color="primary">4</Badge>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h5 className="f-18 f-w-600 mb-0 dropdown-title">{NotiFications}</h5>
        <ul className="notification-box">
          {NotificationData.map((item, index) => (
            <li className="d-flex" key={index}>
              <div className={`flex-shrink-0 bg-light-${item.color}`}>
                <img src={`${ImagePath}/dashboard/icon/${item.src}`} alt={item.alt} />
              </div>
              <div className="flex-grow-1">
                <Link href={Href}><h6>{item.title}</h6></Link>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
          <li><Link className="f-w-700" href={Href}>{CheckAll}</Link></li>
        </ul>
      </div>
    </li>
  );
};
