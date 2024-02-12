import { Badge } from "reactstrap";
import { DesignLearning, Href } from "@/Constant";
import Link from "next/link";
import { DesignerCategoryData } from "@/Data/Miscellaneous/Learning";

const DesignCategories = () => {
  return (
    <div className="categories pt-2">
      <div className="learning-header">
        <span className="f-w-700">{DesignLearning}</span>
      </div>
      <ul>
        {DesignerCategoryData.map((data, index) => (
          <li className="border-0" key={index}>
            <Link href={Href}>{data.learningHeading}</Link>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignCategories;
