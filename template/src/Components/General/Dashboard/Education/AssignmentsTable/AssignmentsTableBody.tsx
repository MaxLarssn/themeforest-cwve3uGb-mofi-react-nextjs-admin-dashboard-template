import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { AssignmentsTableBodyType } from "@/Types/DashboardType";
import Link from "next/link";
import { Input, Label, Progress } from "reactstrap";
import { CommonDropdown } from "../../common/CommonDropdown";

const AssignmentsTableBody :React.FC<AssignmentsTableBodyType>= ({currentItems}) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <tbody>
      {currentItems.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label check/>
            </div>
          </td>
          <td>
            <span>{data.id}</span>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-4/user/${data.image}`} alt="user"/>
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href={`/${i18LangStatus}/ecommerce/product_page`}><h6>{data.name}</h6></Link>
              </div>
              <div className="active-status active-online" />
            </div>
          </td>
          <td>{data.subjects}</td>
          <td>{data.startDate}</td>
          <td>{data.endDate} </td>
          <td>
            <Progress className={`sm-progress-bar progress-border-${data.color}`} value={data.value} />
          </td>
          <td className="text-center">
            <CommonDropdown/>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AssignmentsTableBody;
