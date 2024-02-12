import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href, OrdersStatusHeading } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import { ProgressChart1, ProgressChart2, ProgressChart3, ProgressChart4, ProgressChart5 } from "@/Data/General/Widgets/Chart";
import { CommonDropdown } from "@/Components/General/Dashboard/common/CommonDropdown";
import { useState } from "react";

const OrderStatus = () => {
  const [dropdownOpens, setDropdownOpens] = useState(false);
  const toggleMenu = () => setDropdownOpens((prevState) => !prevState);

  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <DashboardCommonHeader title={OrdersStatusHeading} dropDownFalse>
          <Dropdown className="location-menu" isOpen={dropdownOpens} toggle={toggleMenu}>
            <DropdownToggle caret color="transparent" className="rounded-3 border-0 px-3" id="locationdropdown">Today</DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag="a" href={Href}>Today</DropdownItem>
              <DropdownItem tag="a" href={Href}>Tomorrow</DropdownItem>
              <DropdownItem tag="a" href={Href}>Yesterday</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DashboardCommonHeader>
        <CardBody>
          <div className="chart-container progress-chart">
            <ReactApexChart id="progress1" options={ProgressChart1} series={ProgressChart1.series} type="bar" height={70} />
            <ReactApexChart id="progress2" options={ProgressChart2} series={ProgressChart2.series} type="bar" height={70} />
            <ReactApexChart id="progress3" options={ProgressChart3} series={ProgressChart3.series} type="bar" height={70} />
            <ReactApexChart id="progress4" options={ProgressChart4} series={ProgressChart4.series} type="bar" height={70} />
            <ReactApexChart id="progress5" options={ProgressChart5} series={ProgressChart5.series} type="bar" height={70} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
