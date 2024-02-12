import { BadgeButtonList } from "@/Data/Uikits/tag-pills";
import { Badge, Button } from "reactstrap";

export const DynamicBadgesAsPartButtons = () => {
  return (
    <>
      {BadgeButtonList.map(({ className, title, icon }, index) => (
        <Button color={className} className={`d-flex align-items-center`} key={index}>
          {title}
          <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2">{icon}</Badge>
        </Button>
      ))}
    </>
  );
};
