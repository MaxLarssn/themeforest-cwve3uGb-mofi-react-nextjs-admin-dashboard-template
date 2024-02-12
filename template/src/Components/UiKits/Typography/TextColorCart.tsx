import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TextColor } from "@/Constant";
import { TextColorData, TextDataColor } from "@/Data/Uikits/typography";
import { Card, CardBody, Col } from "reactstrap";

const TextColorCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={TextColor} span={TextColorData} />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <p className="txt-primary mb-0">This is Primary Color text<code>.txt_primary</code> Class</p>
            {TextDataColor.map(({ title, code }, index) => (
              <p className={`${code} mb-0`} key={index}>{`This is ${title} Color Text`}<code>.{code}</code> Class</p>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorCart;
