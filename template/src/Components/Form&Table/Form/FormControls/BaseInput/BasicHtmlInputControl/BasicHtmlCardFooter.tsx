import { Button, CardFooter, Col } from "reactstrap";
import { BasicCancelButton, BasicSubmitButton } from "@/Constant";

export const BasicHtmlCardFooter = () => {
  return (
    <CardFooter className="text-end">
      <Col sm="9" className="offset-sm-3">
        <Button color="primary" className="me-3">{BasicSubmitButton}</Button>
        <Button color="light" type="reset">{BasicCancelButton}</Button>
      </Col>
    </CardFooter>
  );
};
