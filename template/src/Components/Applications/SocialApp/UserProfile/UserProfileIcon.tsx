import { Href } from "@/Constant";

const UserProfileIcon = () => {
  return (
    <ul className="share-icons">
      <li><a className="social-icon bg-primary" href={Href}><i className="fa fa-smile-o me-0" /></a></li>
      <li><a className="social-icon bg-secondary" href={Href}><i className="fa fa-wechat me-0" /></a></li>
      <li><a className="social-icon bg-warning" href={Href}><i className="fa fa-share-alt me-0" /></a></li>
    </ul>
  );
};

export default UserProfileIcon;
