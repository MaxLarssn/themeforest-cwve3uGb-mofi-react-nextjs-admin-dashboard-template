import { Button, CardFooter } from "reactstrap";
import { ButtonBasicInputCancel, ButtonBasicInputSubmit } from "@/Constant";

export const BasicInputGroupsCardFooter = () => {
  return (
    <CardFooter>
      <Button color="primary" className="m-r-15">{ButtonBasicInputSubmit}</Button>
      <Button color="light" type="reset">{ButtonBasicInputCancel}</Button>
    </CardFooter>
  );
};
