import { Col, Input, Label, Row } from 'reactstrap'
import { CashOnDelivery, CheckPayments, ImagePath, Paypal } from '@/Constant'

const CheckPayment = () => {
  return (
    <div className="animate-chk">
      <Row>
        <Col>
          <Label className="d-block" for="edo-ani" check>
            <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />{CheckPayments}
          </Label>
          <Label className="d-block" for="edo-ani1" check>
            <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"/>
            {CashOnDelivery}
          </Label>
          <Label className="d-block" for="edo-ani2" check>
            <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked/>
            {Paypal}
            <img className="img-paypal" src={`${ImagePath}/checkout/paypal.png`} alt="paypal" />
          </Label>
        </Col>
      </Row>
    </div>
  )
}

export default CheckPayment