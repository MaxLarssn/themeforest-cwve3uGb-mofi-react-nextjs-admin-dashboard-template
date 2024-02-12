import { UserSocialData } from "@/Data/Application/Users";
import Link from "next/link";
import { List, ListInlineItem } from "reactstrap";

const UserSocialMedia = () => {
  return (
    <div className="social-media">
      <List type="inline" className="align-items-center">
        {UserSocialData.map(({ link, icon }, index) => (
          <ListInlineItem key={index}>
            <Link href={link} target="_blank"><i className={`fa fa-${icon}`}></i></Link>
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default UserSocialMedia;
