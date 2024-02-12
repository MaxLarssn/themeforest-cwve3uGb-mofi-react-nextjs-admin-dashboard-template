import { Card } from "reactstrap";
import InterviewMailHeader from "./InterviewMailHeader";
import InterviewMailBody from "./InterviewMailBody";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useAppSelector } from "@/Redux/Hooks";

const InterviewMail = () => {
  const {interviewEmail} = useAppSelector((state)=>state.letterBox)
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrintData = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
      <InterviewMailHeader />
      <InterviewMailBody ref={componentRef} handlePrintData={handlePrintData} />
    </Card>
  );
};

export default InterviewMail;
