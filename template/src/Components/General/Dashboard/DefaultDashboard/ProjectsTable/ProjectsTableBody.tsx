import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { CurrentItemsType } from "@/Types/DashboardType";
import Link from "next/link";
import { Input, Label } from "reactstrap";
import { CommonDropdown } from "../../common/CommonDropdown";

export const ProjectsTableBody :React.FC<CurrentItemsType> = ({currentItems}) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <tbody>
      {currentItems.map((item) => (
        <tr key={item.id}>
          <td>
            <div className="form-check">
              <Input type="checkbox" value="" />
              <Label check></Label>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard/project/${item.image}.png`} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href={`/${i18LangStatus}/ecommerce/product_page`}>
                  <h6>{item.name}</h6>
                </Link>
              </div>
            </div>
          </td>
          <td className="project-dot">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <span className={`bg-${item.color}`}></span>
              </div>
              <div className="flex-grow-1">
                <h6>{item.type}</h6>
              </div>
            </div>
          </td>
          <td>{item.date}</td>
          <td>{item.size}</td>
          <td>{item.author}</td>
          <td className="text-center">
            <CommonDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
