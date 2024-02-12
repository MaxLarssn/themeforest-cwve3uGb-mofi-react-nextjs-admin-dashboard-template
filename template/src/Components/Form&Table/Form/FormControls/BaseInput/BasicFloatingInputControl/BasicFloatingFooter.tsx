import { Button, CardFooter, Col } from "reactstrap";
import { FloatingCancelButton, FloatingSubmitButton } from "@/Constant";

export const BasicFloatingFooter = () => {
  return (
    <CardFooter className="text-end">
      <Col sm="9" className="offset-sm-3">
        <Button color="primary" className="me-3">{FloatingSubmitButton}</Button>
        <Button color="light" type="reset">{FloatingCancelButton}</Button>
      </Col>
    </CardFooter>
  );
};
