"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_ckeditor_component_1 = require("react-ckeditor-component");
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("@/Constant");
var CommonCardHeader_1 = require("@/CommonComponent/CommonCardHeader");
var Editor = function () {
    var InnerText = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.</p>";
    var _a = react_1.useState(InnerText), content = _a[0], setContent = _a[1];
    var onChange = function (evt) {
        var newContent = evt.editor.getData();
        setContent(newContent);
    };
    return (React.createElement(reactstrap_1.Col, { sm: "12" },
        React.createElement(reactstrap_1.Card, null,
            React.createElement(CommonCardHeader_1["default"], { title: Constant_1.CKEditorExample }),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(react_ckeditor_component_1["default"], { activeClassName: "p10", content: content, events: { change: onChange } })))));
};
exports["default"] = Editor;
