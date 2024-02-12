import { ImagePath } from "@/Constant";
import { ActiveTableData } from "@/Data/General/Dashboard/DefaultDashboard";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";

const ActiveMembersTableBody = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <tbody>
      {ActiveTableData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard/user/${data.img}`} alt="userImage" />
              </div>
              <div className="flex-grow-1">
                <Link href={`/${i18LangStatus}/ecommerce/product`}>
                  <h5>{data.name}</h5>
                </Link>
                <span>{data.position}</span>
              </div>
            </div>
          </td>
          <td> {data.status}</td>
          <td>
            <p className={`members-box background-light-${data.color} text-center b-light-${data.color} font-${data.color}`}>{data.btnName}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ActiveMembersTableBody;
