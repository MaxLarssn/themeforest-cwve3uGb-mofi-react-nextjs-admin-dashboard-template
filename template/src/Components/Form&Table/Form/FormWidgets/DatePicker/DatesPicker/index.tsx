import { Form, Card, CardBody, Col} from "reactstrap";
import DatePickerComponentFirst from "./DatePickerComponentFirst";
import { DatePicker } from "@/Constant";
import HumanFriendlyDatePicker from "./HumanFriendlyDatePicker";
import MinMaxValueDatePicker from "./MinMaxValueDatePicker";
import DisabledDatePickerComponent from "./DisabledDatePickerComponent";
import { MultiplesDates } from "./MultiplesDates";
import MyDatePicker from "./MyDatePicker";
import DatePickerComponentLast from "./DatePickerComponentLast";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const DatesPicker = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={DatePicker} />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <Form className="timepicker-wrapper">
              <DatePickerComponentFirst />
              <HumanFriendlyDatePicker />
              <MinMaxValueDatePicker />
              <DisabledDatePickerComponent />
              <MultiplesDates />
              <MyDatePicker />
              <DatePickerComponentLast />
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DatesPicker;
