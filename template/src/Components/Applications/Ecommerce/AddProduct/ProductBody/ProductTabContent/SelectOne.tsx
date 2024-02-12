import { AddCategory } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";
import { Col, Input, Label, Row } from "reactstrap";

const SelectOne = () => {
  const dispatch = useAppDispatch()

  const handleCategory = (select:string) => {
    dispatch(setFormValue({name:"category",value:select}))
  }

  return (
    <Col sm="6">
      <Row className="g-2">
        <Col xs="12">
          <Label className="m-0">{AddCategory}<span className="txt-danger"> *</span></Label>
        </Col>
        <Col xs="12">
          <Input type="select" name="category" defaultValue="Toys & games" onChange={(e)=>handleCategory(e.target.value)}>
            <option>Toys & games</option>
            <option>Sportswear </option>
            <option>Jewellery </option>
            <option>Furniture and Decor</option>
            <option>Health, Personal Care, and Beauty</option>
            <option>Auto and Parts </option>
            <option>Baby Care Products</option>
          </Input>
          <p className="f-light">A product can be added to a category</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectOne;
