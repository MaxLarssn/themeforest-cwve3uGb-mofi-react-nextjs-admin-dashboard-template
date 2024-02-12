import { SentEmailData } from "@/Data/Application/LetterBox";
import { TabPane } from "reactstrap";
import SentEmailContent from "./SentEmailContent";

const SentContent = () => {
  return (
    <TabPane tabId="2">
      <div className="mail-body-wrapper">
        <ul>
          {SentEmailData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <SentEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default SentContent;
