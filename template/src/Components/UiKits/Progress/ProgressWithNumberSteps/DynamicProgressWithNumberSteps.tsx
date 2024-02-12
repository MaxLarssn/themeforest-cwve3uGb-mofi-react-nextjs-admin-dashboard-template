import { ProgressNumberList } from "@/Data/Uikits/progress";
import { Button } from "reactstrap";

export const DynamicProgressWithNumberSteps = () => {
  return (
    <>
      {ProgressNumberList.map(({ color, number, className }, index) => (
        <Button size="sm" color={color} className={`position-absolute top-0 p-0 ${className} translate-middle rounded-circle`} style={{width: "2rem",height: "2rem",}}key={index}>
          {number}
        </Button>
      ))}
    </>
  );
};
