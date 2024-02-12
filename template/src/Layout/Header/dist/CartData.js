"use strict";
exports.__esModule = true;
exports.CartData = void 0;
var reactstrap_1 = require("reactstrap");
var SVG_1 = require("@/CommonComponent/SVG");
var Constant_1 = require("@/Constant");
var Layout_1 = require("@/Data/Layout");
var image_1 = require("next/image");
var react_feather_1 = require("react-feather");
var link_1 = require("next/link");
var Hooks_1 = require("@/ReduxToolkit/Hooks");
exports.CartData = function () {
    var i18LangStatus = Hooks_1.useAppSelector(function (state) { return state.langSlice; }).i18LangStatus;
    return (React.createElement("li", { className: "cart-nav onhover-dropdown" },
        React.createElement("div", { className: "cart-box" },
            React.createElement(SVG_1["default"], { iconId: "stroke-ecommerce" })),
        React.createElement("div", { className: "cart-dropdown onhover-show-div" },
            React.createElement("h5", { className: "f-18 f-w-600 mb-0 dropdown-title" }, Constant_1.Cart),
            React.createElement("ul", null,
                Layout_1.cartDetailsList.map(function (item, index) { return (React.createElement("li", { key: index },
                    React.createElement("div", { className: "d-flex" },
                        React.createElement(image_1["default"], { width: 60, height: 80, className: "img-fluid b-r-5 me-3 img-60", src: Constant_1.ImagePath + "/other-images/cart-img.jpg", alt: "" }),
                        React.createElement("div", { className: "flex-grow-1" },
                            React.createElement("span", { className: "f-w-600" }, item),
                            React.createElement("div", { className: "qty-box" },
                                React.createElement(reactstrap_1.InputGroup, null,
                                    React.createElement("span", { className: "input-group-prepend" },
                                        React.createElement(reactstrap_1.Button, { className: "quantity-left-minus" }, "-")),
                                    React.createElement(reactstrap_1.Input, { className: "input-number", type: "text", name: "quantity" }),
                                    React.createElement("span", { className: "input-group-prepend" },
                                        React.createElement(reactstrap_1.Button, { className: "quantity-right-plus" }, "+")))),
                            React.createElement("h6", { className: "font-primary" }, "$500.00")),
                        React.createElement("div", { className: "close-circle" },
                            React.createElement(link_1["default"], { className: "bg-danger", href: Constant_1.Href },
                                React.createElement(react_feather_1.X, null)))))); }),
                React.createElement("li", { className: "total" },
                    React.createElement("h6", { className: "mb-0" },
                        Constant_1.OrderTotal,
                        " : ",
                        React.createElement("span", { className: "f-w-600 f-right" }, "$1000.00"))),
                React.createElement("li", { className: "text-center" },
                    React.createElement(link_1["default"], { className: "d-block mb-3 view-cart f-w-700", href: "/" + i18LangStatus + "/ecommerce/cart" }, Constant_1.GoToYourCart),
                    React.createElement(link_1["default"], { href: "/" + i18LangStatus + "/ecommerce/checkout" },
                        React.createElement(reactstrap_1.Button, { color: "primary", className: "view-checkout" }, Constant_1.Checkout)))))));
};
