import { ImagePath } from "@/Constant";
import { SalesByProductTableData } from "@/Data/General/Dashboard/DefaultDashboard";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Progress } from "reactstrap";

const SalesByProductTableBody = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <tbody>
      {SalesByProductTableData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard/product/${data.img}`} alt="product"/>
              </div>
              <div className="flex-grow-1">
                <Link href={`/${i18LangStatus}/ecommerce/product_list`}>
                  <h5>{data.fileName}</h5>
                </Link>
              </div>
            </div>
          </td>
          <td> $ {data.amount}</td>
          <td> {data.sold}</td>
          <td>
            <Progress animated striped color={data.color} className={`b-r-2 progress-striped-${data.color}`} value={data.value} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SalesByProductTableBody;
