import { ImagePath } from "@/Constant";
import { RecentTableBodyData } from "@/Data/General/Dashboard/Project";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";
import { Input, Label } from "reactstrap";
import { CommonDropdown } from "../../common/CommonDropdown";

const RecentProjectsTableBody = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <tbody>
      {RecentTableBodyData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label check />
            </div>
          </td>
          <td className="px-0">
            <Link href={`/${i18LangStatus}/ecommerce/recent_order`}>{data.name}</Link>
          </td>
          <td className="customers text-center social-group">
            <ul>
              {data.images.map((item, i) => (
                <li className="d-inline-block" key={i}>
                  {item.image !== "" ? <img className="img-30 rounded-circle" src={`${ImagePath}/dashboard-2/user/${item.image}`} alt="users" /> : <p className="bg-light rounded-circle">5+</p>}
                </li>
              ))}
            </ul>
          </td>
          <td> {data.date}</td>
          <td> {data.endDate}</td>
          <td className="radial-chart-wrap p-0">
            <ReactApexChart className="widgetsChart" id={data.chartId} options={data.option} series={data.option.series} height={90} type="radialBar" />
          </td>
          <td>
            <CommonDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RecentProjectsTableBody;
