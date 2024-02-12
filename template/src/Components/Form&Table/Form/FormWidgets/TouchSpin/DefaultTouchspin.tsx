import { Card, CardBody, Col } from "reactstrap";
import { DefaultTouchspins } from "@/Constant";
import { useState } from "react";
import { DefaultTouchSpinData, TouchSpinData } from "@/Data/Form&Table/Form";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTouchspin } from "./Common/CommonTouchspin";

const DefaultTouchspin = () => {
  const initialValues =DefaultTouchSpinData.map((data) => data.value);
  const [values, setValues] = useState(initialValues);
  const handleIncrement = (index:number) => {
    setValues((prevValues) => {
      return prevValues.map((value, i) => (i === index ? value + 1 : value));
    });
  };
  const handleDecrement = (index:number) => {
    setValues((prevValues) => {
      return prevValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
    });
  };
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={DefaultTouchspins} span={TouchSpinData} />
        <CardBody className="common-flex">
          {DefaultTouchSpinData.map((data) => (
            <CommonTouchspin key={data.id} color={data.color} value={values[data.id - 1]} onIncrement={() => handleIncrement(data.id - 1)} onDecrement={() => handleDecrement(data.id - 1)} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultTouchspin;
