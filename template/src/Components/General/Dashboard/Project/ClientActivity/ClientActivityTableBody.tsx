import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ClientActivityBodyType } from "@/Types/DashboardType";
import Link from "next/link";
import { Input, Label, Progress } from "reactstrap";
import { CommonDropdown } from "../../common/CommonDropdown";

const ClientActivityTableBody :React.FC<ClientActivityBodyType> = ({currentItems}) => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <tbody>
      {currentItems.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label check />
            </div>
          </td>
          <td className="px-0">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-2/svg-icon/${data.image}`} alt="icons"/>
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href={`/${i18LangStatus}/ecommerce/product_page`}><h5>{data.title}</h5></Link>
                <p>{data.name}</p>
              </div>
            </div>
          </td>
          <td className="px-0">{data.date}</td>
          <td className="customers text-center social-group">
            <ul>
              {data.images.map((item, i) => (
                <li className="d-inline-block" key={i}>
                  {item !== "" ? (
                    <img className="img-30 rounded-circle" src={`${ImagePath}/dashboard-2/user/${item}`} alt="user" />
                  ) : (
                    <p className="bg-light rounded-circle">5+</p>
                  )}
                </li>
              ))}
            </ul>
          </td>
          <td> {data.type} </td>
          <td>
            <div className="progress-showcase">
              <Progress className={`sm-progress-bar progress-border-${data.color}`} value={data.progressValue}/>
            </div>
          </td>
          <td className="text-center pe-3">
            <CommonDropdown/>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientActivityTableBody;
