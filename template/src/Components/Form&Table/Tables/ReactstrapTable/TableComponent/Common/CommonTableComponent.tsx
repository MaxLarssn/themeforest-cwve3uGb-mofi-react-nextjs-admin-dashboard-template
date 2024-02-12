import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTableComponentProp } from "@/Types/TableType";
import { Card, Col, Row, Table } from "reactstrap";

export const CommonTableComponent :React.FC<CommonTableComponentProp> = ({ title, data, tableClass }) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={title} />
        <div>
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive theme-scrollbar">
                <Table className={tableClass} bordered>
                  <tbody>
                    {data.map((component, index) => (
                      <tr key={index}>
                        <td className={component.tdClassName}>{component.title}</td>
                        <td className="w-50">{component.tableColData}</td>
                        <td>
                          {component.details.map((detail, index) => (
                            <span key={index}>
                              {detail.text}
                              {detail.code && <code> {detail.code} </code>}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};
