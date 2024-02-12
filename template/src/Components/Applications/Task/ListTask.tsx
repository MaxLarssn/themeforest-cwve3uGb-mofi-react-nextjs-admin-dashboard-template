import { useRef } from "react";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import { Documentation, Href, Print } from "@/Constant";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import CreatedByMe from "./CreatedByMe";

const ListOfTask = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{Documentation}</h4>
        <a href={Href} onClick={handlePrint}><Printer className="me-2"/>{Print}</a>
      </CardHeader>
      <CreatedByMe ref={componentRef}/>
    </Card>
  );
};

export default ListOfTask;
