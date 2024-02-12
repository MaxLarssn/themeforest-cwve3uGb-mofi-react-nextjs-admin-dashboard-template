import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GridOptions } from "@/Constant";
import { Card, CardBody, Col, Table } from "reactstrap";
import { GridOptionTableHead } from "./GridOptionTableHead";
import { GridOptionTableBody } from "./GridOptionTableBody";
import { GridData } from "@/Data/Uikits/grid";

const GridOptionsCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridOptions} span={GridData} />
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <Table bordered striped>
              <GridOptionTableHead />
              <GridOptionTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCart;
