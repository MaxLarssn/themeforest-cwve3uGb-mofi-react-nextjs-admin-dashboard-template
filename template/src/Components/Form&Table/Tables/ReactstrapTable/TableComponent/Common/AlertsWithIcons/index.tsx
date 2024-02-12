import { Alert } from "reactstrap";
import { useState } from "react";

export const AlertsWithIcons = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
      <Alert color="primary" isOpen={visible} toggle={onDismiss} fade>
        <i className="icofont icofont-heart-alt"></i>
        <p>Good Morning! Start your day with some alerts.</p>
      </Alert>
    );
  };