import { ActivityLogData } from "@/Data/Application/SocialApp";
import { MyActivityProp } from "@/Types/SocialAppType";

const MyActivity :React.FC<MyActivityProp> = ({ heading }) => {
  return (
    <div className="my-activity">
      <h6 className="f-w-600 mb-3">{heading}</h6>
      {ActivityLogData.map((item) => (
        <p key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default MyActivity;
