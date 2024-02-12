import { Button, Col, Row } from "reactstrap";
import { Add, Cancel } from "@/Constant";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

export const ButtonSection = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Row>
      <Col>
        <div className="text-end">
          <Button type="submit" color="success" className="me-3">{Add}</Button>
          <Link className="btn btn-danger" href={`/${i18LangStatus}/project/project_list`}>{Cancel}</Link>
        </div>
      </Col>
    </Row>
  );
};
