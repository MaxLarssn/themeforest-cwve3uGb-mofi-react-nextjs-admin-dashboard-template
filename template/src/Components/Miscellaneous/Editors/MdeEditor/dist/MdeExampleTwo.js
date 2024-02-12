"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("@/Constant");
var CommonCardHeader_1 = require("@/CommonComponent/CommonCardHeader");
var react_simplemde_editor_1 = require("react-simplemde-editor");
var MdeExampleTwo = function () {
    var _a = react_1.useState(""), value = _a[0], setValue = _a[1];
    var handelChange = function (newValue) { return setValue(newValue); };
    var MNDeditortext = "Enter text in the area on the left. For more info, click the ? (help) icon in the menu.";
    return (React.createElement(reactstrap_1.Container, { fluid: true },
        React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { sm: "12" },
                React.createElement(reactstrap_1.Card, null,
                    React.createElement(CommonCardHeader_1["default"], { title: Constant_1.SecondExample }),
                    React.createElement(reactstrap_1.CardBody, null,
                        React.createElement(reactstrap_1.Row, { className: "editor_container" },
                            React.createElement(reactstrap_1.Col, { md: "6" },
                                React.createElement(react_simplemde_editor_1["default"], { id: "editor_container", options: { autofocus: true, spellChecker: false }, onChange: handelChange })),
                            React.createElement(reactstrap_1.Col, { md: "6", className: "reader" },
                                React.createElement("h3", null, Constant_1.Instructions),
                                React.createElement("p", null, MNDeditortext),
                                React.createElement("br", null),
                                value))))))));
};
exports["default"] = MdeExampleTwo;
