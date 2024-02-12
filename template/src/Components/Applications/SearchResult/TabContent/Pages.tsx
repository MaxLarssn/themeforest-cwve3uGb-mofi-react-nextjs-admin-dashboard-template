import { Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "@/Constant";
import { PagesSortProp } from "@/Types/SearchResultType";

const PagesSort :React.FC<PagesSortProp> = ({pageClass}) => {  
  return (
    <Col xs="12" className="m-t-30 mb-3">
      <div>
        <nav className={`d-flex justify-content-${pageClass}`}>
          <Pagination className="pagination-primary">
            <PaginationItem disabled><PaginationLink href={Href}>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2<span className="sr-only">(current)</span></PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>{Next}</PaginationLink></PaginationItem>
          </Pagination>
        </nav>
      </div>
    </Col>
  );
};
export default PagesSort;
