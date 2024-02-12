import { CommonTouchspinProp } from "@/Types/FormType";
import { Button, Input } from "reactstrap";

export const CommonTouchspin :React.FC<CommonTouchspinProp>= ({ color, value, faAngle, onDecrement, outline, btnClass, onIncrement }) => {
  return (
    <div className="touchspin-wrapper d-flex">
      <Button color={color} outline={outline} className={`p-0 decrement-touchspin btn-touchspin me-1 ${btnClass}`} onClick={onDecrement}>
        {faAngle ? <i className="fa fa-angle-left" /> : <i className="fa fa-minus" />}
      </Button>
      <Input className={`input-touchspin spin-outline-${color} me-1`} type="number" value={value} readOnly />
      <Button color={color} outline={outline} className={`p-0 increment-touchspin btn-touchspin ${btnClass}`} onClick={onIncrement}>
        {faAngle ? <i className="fa fa-angle-right" /> : <i className="fa fa-plus" />}
      </Button>
    </div>
  );
};
