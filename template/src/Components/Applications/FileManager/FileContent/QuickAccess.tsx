import { QuickAccessTitle } from "@/Constant";
import { QuickAccessData } from "@/Data/Application/FileManager";

const QuickAccess = () => {
  return (
    <>
      <h5>{QuickAccessTitle}</h5>
      <ul className='quick-file d-flex flex-row mt-2'>
        {QuickAccessData.map((item, i) => (
          <li key={i}>
            <div className='quick-box'>{item.icon}</div>
            <h6>{item.title}</h6>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuickAccess;
