"use strict";
exports.__esModule = true;
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("@/Constant");
var CommonCardHeader_1 = require("@/CommonComponent/CommonCardHeader");
var InlineEditor = function () {
    var LoremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.";
    return (React.createElement(reactstrap_1.Col, { sm: "12" },
        React.createElement(reactstrap_1.Card, null,
            React.createElement(CommonCardHeader_1["default"], { title: Constant_1.InlineEditors }),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement("div", { id: "area1", contextMenu: "true" },
                    React.createElement("h1", null, Constant_1.EditorsText),
                    React.createElement("p", null, LoremText))))));
};
exports["default"] = InlineEditor;
