import { ImagePath } from "@/Constant";
import { TodayTasksData } from "@/Data/General/Dashboard/Project";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { CommonDropdown } from "../../common/CommonDropdown";

const TodayTasksBody = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <>
      {TodayTasksData.map((data, i) => (
        <li className="bg-light" key={i}>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className={`font-${data.color} f-w-500`}>{data.header}</h6>
            <CommonDropdown/>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="flex-shrink-0">
              {!data.img1 ? (
                <img src={`${ImagePath}/dashboard-2/user/${data.img}`} alt="user"/>
              ) : (
                <div className="customers social-group">
                  <ul>
                    <li className="d-inline-block">
                      <img className="rounded-circle border-0" src={`${ImagePath}/dashboard-2/user/${data.img}`} alt="users" />
                    </li>
                    <li className="d-inline-block">
                      <img className="rounded-circle" src={`${ImagePath}/dashboard-2/user/${data.img1}`} alt="users" />
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex-grow-1">
              <p className="mb-0">{data.assign}</p>
              <Link href={`/${i18LangStatus}/ecommerce/product_page`}><h5>{data.name} </h5></Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default TodayTasksBody;
