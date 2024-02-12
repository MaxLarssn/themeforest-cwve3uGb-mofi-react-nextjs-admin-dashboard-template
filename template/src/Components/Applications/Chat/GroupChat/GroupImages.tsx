import { ImagePath } from "@/Constant";
import { GroupChatHeader } from "@/Data/Application/Chats";

const GroupImages = () => {
  return (
    <div className="chat-time group-chat">
      <ul>
        {GroupChatHeader.map((data, i) => (
          <li key={i}>
            <img className="img-fluid rounded-circle" src={`${ImagePath}/${data}`} alt="user" />
          </li>
        ))}
        <li>
          <div className="custom-name profile-count light-background">
            <p className="f-w-500">9+</p>
          </div>
        </li>
      </ul>
      <div>
        <span>Meeting Department</span>
        <p>35 Members</p>
      </div>
    </div>
  );
};

export default GroupImages;
