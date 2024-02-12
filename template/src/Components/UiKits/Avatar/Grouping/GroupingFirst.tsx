import { ImagePath } from "@/Constant";
import { GroupingImageOne } from "@/Data/Uikits/avatars";

export const GroupingFirst = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <img className="img-100 b-r-8" src={`${ImagePath}/avtar/4.jpg`} alt="image" />
        </li>
        {GroupingImageOne.map(({ className, src }, index) => (
          <li className="d-inline-block" key={index}>
            <img className={`${className} h-auto`} src={`${ImagePath}${src}`} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};
