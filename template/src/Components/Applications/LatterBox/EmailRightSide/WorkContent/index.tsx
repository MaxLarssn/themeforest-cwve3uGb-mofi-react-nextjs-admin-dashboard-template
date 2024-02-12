import { WorkEmailData } from "@/Data/Application/LetterBox";
import { TabPane } from "reactstrap";
import WorkEmailContent from "./WorkEmailContent";

const WorkContent = () => {
  return (
    <TabPane tabId="6">
      <div className="mail-body-wrapper">
        <ul>
          {WorkEmailData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <WorkEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default WorkContent;
