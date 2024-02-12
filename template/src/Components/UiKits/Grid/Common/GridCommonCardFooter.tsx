import { Class, ValueOfClass } from "@/Constant";
import { GridCommonCardFooterType } from "@/Types/UikitsType";
import { CardFooter } from "reactstrap";

const GridCommonCardFooter:React.FC<GridCommonCardFooterType> = ({ className, valueClass }) => {
  return (
    <CardFooter>
      <div className="table-responsive theme-scrollbar">
        <table className="w-100">
          <tbody>
            <tr>
              <th>{Class}</th>
              <th>{ValueOfClass}</th>
            </tr>
            <tr>
              <td><code>{className}</code></td>
              <td>{valueClass}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardFooter>
  );
};

export default GridCommonCardFooter;
