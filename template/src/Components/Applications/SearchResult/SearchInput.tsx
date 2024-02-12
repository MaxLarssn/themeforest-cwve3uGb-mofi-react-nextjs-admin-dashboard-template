import { CardHeader, Form, Input, InputGroup, InputGroupText } from "reactstrap";
import { Search } from "@/Constant";

const SearchInput = () => {
  return (
    <CardHeader>
      <Form className="theme-form">
        <InputGroup className=" m-0 flex-nowrap">
          <Input className="form-control-plaintext" type="search" placeholder="Pixelstrap .." />
          <InputGroupText className="btn btn-primary">{Search}</InputGroupText>
        </InputGroup>
      </Form>
    </CardHeader>
  );
};

export default SearchInput;
