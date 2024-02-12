import { Formik } from "formik";
import { useState } from "react";
import { ValidationsForms } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { FormValidations } from "./FormValidations";
import { FormValidationProp } from "@/Types/FormType";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FormValidationSchema, ValidationFormData, ValidationFormInitialValue } from "@/Data/Form&Table/Form";

const ValidationForm = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: FormValidationProp, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };

  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ValidationsForms} span={ValidationFormData} />
        <CardBody>
          <Formik initialValues={ValidationFormInitialValue} onSubmit={handleSubmit} validationSchema={FormValidationSchema}>
            {({ errors }) => <FormValidations submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ValidationForm;
