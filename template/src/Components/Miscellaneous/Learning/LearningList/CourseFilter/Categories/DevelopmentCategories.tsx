import { Badge } from "reactstrap";
import { DevelopmentTitle, Href } from "@/Constant";
import Link from "next/link";
import { DevelopmentData } from "@/Data/Miscellaneous/Learning";

const DevelopmentCategories = () => {
  return (
    <div className="categories pt-1">
      <div className="learning-header">
        <span className="f-w-700">{DevelopmentTitle}</span>
      </div>
      <ul>
        {DevelopmentData.map((data, index) => (
          <li className="border-0" key={index}>
            <Link href={Href}>{data.DevelopmentHeading}</Link>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentCategories;
