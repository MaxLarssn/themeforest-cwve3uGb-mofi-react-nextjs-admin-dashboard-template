import CountUp from "react-countup";
import { Label, List, ListInlineItem } from "reactstrap";
import { Href } from "@/Constant";
import { CommonUserFooterType } from "@/Types/UserType";
import { CommonUserData } from "@/Data/Application/Users";


const CommonUserFooter :React.FC<CommonUserFooterType> = ({listClass}) => {
  return (
    <div className={`"like-comment mt-3 ${listClass ? listClass : ""}`}>
      <List type="inline" className="justify-content-start mt-2">
        {CommonUserData.map((item, index) => (
          <ListInlineItem className={item.listClass} key={index}>
            <Label className="m-0">
              <a href={Href}>
                <i className={`fa fa-${item.icon}`}></i>
              </a>
              {item.text}
            </Label>
            <CountUp end={item.count} className="ms-2" delay={1}/>
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default CommonUserFooter;
