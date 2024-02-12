import { CardNumber, CardNumberPlaceholder, Currency, CurrencyPlaceholder, Delimiter, DelimiterPlaceholder, PhoneNumber, PhoneNumberPlaceholder, Prefix, PrefixPlaceholder, Tailprefix, TailprefixPlaceholder } from "@/Constant";
import { CleaveInputType } from "@/Types/FormType";
import Cleave from "cleave.js";
import { NumeralThousandsGroupStyleType } from "cleave.js/options";
import React, { useEffect, useRef } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";

const CleaveInput :React.FC<CleaveInputType> = ({ className, options, placeholder }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      new Cleave(inputRef.current, options);
    }
  }, [options]);

  return <Input innerRef={inputRef} className={className} placeholder={placeholder} />;
};

const DefaultInputMaskForm = () => {
  const currencyOptions = {
    numeral: true,
    numeralThousandsGroupStyle: "thousand" as NumeralThousandsGroupStyleType,
  };

  const prefixOptions = {
    prefix: "PREFIX",
    delimiter: "-",
    blocks: [6, 4, 4, 4],
    uppercase: true,
  };

  const delimiterOptions = {
    delimiters: [".", ".", "-"],
    blocks: [3, 3, 3],
    uppercase: true,
  };

  const cardNumberOptions = {
    creditCard: true,
  };

  return (
    <Form>
      <Row className="g-3">
        <Col xxl="4" sm="6">
          <Label className="col-form-label" htmlFor="cleave-number-format">{Currency}</Label>
          <CleaveInput className="form-control" options={currencyOptions} placeholder={CurrencyPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label className="col-form-label" htmlFor="cleave-type-prefix">{Prefix}</Label>
          <CleaveInput className="form-control" options={prefixOptions} placeholder={PrefixPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label className="col-form-label" htmlFor="cleave-type-delimiter">{Delimiter}</Label>
          <CleaveInput className="form-control" options={delimiterOptions} placeholder={DelimiterPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label>{PhoneNumber}</Label>
          <input className="form-control" id="cleave-phone-number" type="text" placeholder={PhoneNumberPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label>{CardNumber}</Label>
          <CleaveInput className="form-control" options={cardNumberOptions} placeholder={CardNumberPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label>{Tailprefix}</Label>
          <input className="form-control" id="tailprefix" type="text" placeholder={TailprefixPlaceholder} />
        </Col>
      </Row>
    </Form>
  );
};

export default DefaultInputMaskForm;
