import { Filters } from "@/Constant";
import { Col, Row } from "reactstrap";
import { ChevronDown } from "react-feather";
import { Sorting } from "./Sorting";
import { GridAndListView } from "./GridAndListView";
import { GridOptions } from "./GridOptions";
import { useAppDispatch } from "@/Redux/Hooks";
import { setIsFilter } from "@/Redux/Reducers/FilterSlice";

const ProductTotal = () => {
  const dispatch = useAppDispatch();

  return (
    <Row className="mb-2">
      <Col md="6" className="products-total">
        <GridAndListView />
        <span className="d-none-productlist filter-toggle">
          {Filters}
          <span className="ms-2" onClick={() => dispatch(setIsFilter())}>
            <ChevronDown className="toggle-data" />
          </span>
        </span>
        <GridOptions />
      </Col>
      <Sorting />
    </Row>
  );
};

export default ProductTotal;
