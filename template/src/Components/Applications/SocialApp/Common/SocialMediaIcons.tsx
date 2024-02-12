import { SocialUserData } from "@/Data/Application/SocialApp";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <ul className="card-social">
      {SocialUserData.map((data, index) => (
        <li key={index}>
          <Link href={data.link} target="_blank">
            <i className={`fa ${data.iconClassName} me-0`}></i>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;