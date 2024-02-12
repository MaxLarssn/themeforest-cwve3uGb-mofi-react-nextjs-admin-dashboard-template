import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { RecentOrdersBodyType } from "@/Types/DashboardType";
import Link from "next/link";
import { Button, Input, Label } from "reactstrap";

const RecentOrdersBody :React.FC<RecentOrdersBodyType> = ({currentItems}) => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
   return (
    <tbody>
      {currentItems.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label check />
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-3/${data.image}`} alt="dashboard-3" />
              </div>
              <div className="flex-grow-1">
                <Link href={`/${i18LangStatus}/ecommerce/checkout`}><h6>{data.order}</h6></Link>
              </div>
            </div>
          </td>
          <td>{data.date}</td>
          <td>QTY:{data.quantity}</td>
          <td className="customer-img">
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-3/user/${data.image1}`} alt="dashboard-3" />
              </div>
              <div className="flex-grow-1">
                <h6>{data.name}</h6>
              </div>
            </div>
          </td>
          <td>
            <p>${data.amount}</p>
          </td>
          <td>
            <div className="status-box">
              <Button className={`background-light-${data.color} font-${data.color} f-w-500`} color="transparent">{data.status}</Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RecentOrdersBody;
