import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const TimePicker24Hours = () => {
  return (
    <DatePicker
      inputClass="form-control"
      disableDayPicker
      format="HH:mm"
      plugins={[<TimePicker hideSeconds key={"TimePicker"} />]}
    />
  );
};

export default TimePicker24Hours;
