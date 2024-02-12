"use strict";
exports.__esModule = true;
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("@/Constant");
var CommonCardHeader_1 = require("@/CommonComponent/CommonCardHeader");
var react_simplemde_editor_1 = require("react-simplemde-editor");
var MdeExampleOne = function () {
    var MdeEditorText = "Enter text in the area on the left. For more info, click the ? (help) icon in the menu.";
    return (React.createElement(reactstrap_1.Row, null,
        React.createElement(reactstrap_1.Col, { sm: "12" },
            React.createElement(reactstrap_1.Card, null,
                React.createElement(CommonCardHeader_1["default"], { title: Constant_1.MdeEditorExample }),
                React.createElement(reactstrap_1.CardBody, null,
                    React.createElement(react_simplemde_editor_1["default"], { id: "editor_container", value: MdeEditorText, options: { autofocus: true, spellChecker: false } }))))));
};
exports["default"] = MdeExampleOne;
