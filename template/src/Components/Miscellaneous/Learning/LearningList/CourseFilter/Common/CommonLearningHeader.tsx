import { ChevronDown, ChevronUp } from "react-feather";
import { Button, CardHeader } from "reactstrap";
import { ComonLearningHeaderProp } from "@/Types/LearningType";

const CommonLearningHeader:React.FC<ComonLearningHeaderProp> = ({heading,isOpen,setIsOpen}) => {
  return (
    <CardHeader className="card-no-border pb-0">
      <h5 className="mb-0">
        <Button color="tranparent" tag="a" className="btn-link d-flex justify-content-between" onClick={() => setIsOpen(!isOpen)}>{heading}
        {isOpen ? <ChevronDown className="m-0" /> : <ChevronUp className="m-0" />}
        </Button>
      </h5>
    </CardHeader>
  );
};

export default CommonLearningHeader;
