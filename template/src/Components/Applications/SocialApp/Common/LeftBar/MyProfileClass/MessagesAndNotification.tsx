import { Badge } from "reactstrap";
import { MyPage } from "@/Constant";

const MessagesAndNotification = () => {
  return (
    <div className="flex-grow-1">
      <h6 className="font-primary f-w-700">{MyPage}</h6>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"></i>
          <span className="px-2">Messages<Badge pill color="light">9</Badge></span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">Notification<Badge pill color="light">9</Badge></span>
        </span>
      </span>
    </div>
  );
};

export default MessagesAndNotification;
