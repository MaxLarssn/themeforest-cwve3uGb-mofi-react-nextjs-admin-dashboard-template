import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Category } from "./Category/Category";
import { FilterHeader } from "./FilterHeader";
import { PriceRange } from "./PriceRange";
import { SearchBox } from "./SearchBox";

const ProductSidebar = () => {
  const { isFilter } = useAppSelector((state) => state.filterData);

  return (
    <Row>
      <Col sm="3">
        <div className={`product-sidebar ${isFilter ? "open" : ""}`}>
          <div className="filter-section">
            <Card>
              <FilterHeader />
              <div className="left-filter theme-scrollbar z-1">
                <CardBody className="filter-cards-view animate-chk theme-scrollbar">
                  <Category />
                  <PriceRange />
                  <div className="product-filter text-center">
                    <img className="img-fluid banner-product" src={`${ImagePath}/ecommerce/banner.jpg`} alt="" />
                  </div>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </Col>
      <SearchBox />
    </Row>
  );
};
export default ProductSidebar;
