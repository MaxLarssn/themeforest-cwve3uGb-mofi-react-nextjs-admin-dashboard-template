"use strict";
exports.__esModule = true;
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("@/Constant");
var CommonCardHeader_1 = require("@/CommonComponent/CommonCardHeader");
var Form_1 = require("@/Data/Form&Table/Form");
var OutlinedCheckboxStyles = function () {
    return (React.createElement(reactstrap_1.Col, { md: "6" },
        React.createElement(reactstrap_1.Card, null,
            React.createElement(CommonCardHeader_1["default"], { title: Constant_1.OutlinedCheckboxStyle, span: Form_1.OutlineCheckboxData }),
            React.createElement(reactstrap_1.CardBody, { className: "common-flex main-checkbox-toggle" },
                React.createElement(reactstrap_1.Input, { className: "btn-check", id: "btn-check-outlined", type: "checkbox" }),
                React.createElement(reactstrap_1.Label, { className: "btn btn-outline-info", htmlFor: "btn-check-outlined", check: true }, Constant_1.SingleToggle),
                React.createElement(reactstrap_1.Input, { className: "btn-check", id: "btn-check-2-outlined", type: "checkbox", defaultChecked: true }),
                React.createElement(reactstrap_1.Label, { className: "btn btn-outline-danger", htmlFor: "btn-check-2-outlined", check: true }, Constant_1.ButtonChecked),
                React.createElement(reactstrap_1.Input, { className: "btn-check", id: "success-outlined", type: "radio", name: "options-outlined", defaultChecked: true }),
                React.createElement(reactstrap_1.Label, { className: "btn btn-outline-success", htmlFor: "success-outlined", check: true }, Constant_1.ButtonCheckedSuccessRadio),
                React.createElement(reactstrap_1.Input, { className: "btn-check", id: "danger-outlined", type: "radio", name: "options-outlined" }),
                React.createElement(reactstrap_1.Label, { className: "btn btn-outline-dark", htmlFor: "danger-outlined", check: true }, Constant_1.ButtonDarkRadio)))));
};
exports["default"] = OutlinedCheckboxStyles;
