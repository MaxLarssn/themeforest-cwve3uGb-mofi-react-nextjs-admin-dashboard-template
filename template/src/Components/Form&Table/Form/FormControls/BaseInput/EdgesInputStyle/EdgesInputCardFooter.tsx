import { Button, CardFooter } from "reactstrap";
import { EdgeCancel, EdgeSubmit } from "@/Constant";

export const EdgesInputCardFooter = () => {
  return (
    <CardFooter className="text-end">
      <Button color="primary" className="me-3">{EdgeSubmit}</Button>
      <Button color="light" type="reset">{EdgeCancel}</Button>
    </CardFooter>
  );
};
