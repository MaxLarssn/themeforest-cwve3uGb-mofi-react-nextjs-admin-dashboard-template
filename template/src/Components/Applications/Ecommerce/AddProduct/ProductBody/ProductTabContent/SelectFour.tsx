import { PublishStatus } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";
import { Col, Input, Label, Row } from "reactstrap";

const SelectFour = () => {
  const dispatch = useAppDispatch()

  const handleStatus = (select:string) => {
    dispatch(setFormValue({name:"status",value:select}))
  }

  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01" check>{PublishStatus}<span className="txt-danger"> *</span></Label>
          <Input type="select" name="status" onChange={(e)=>handleStatus(e.target.value)}>
            <option>Publish</option>
            <option>Drafts</option>
            <option>Unpublish</option>
          </Input>
          <p className="f-light">Choose the status</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFour;
