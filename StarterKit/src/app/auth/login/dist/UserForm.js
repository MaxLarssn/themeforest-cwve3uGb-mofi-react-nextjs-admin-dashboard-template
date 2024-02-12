"use strict";
exports.__esModule = true;
exports.UserForm = void 0;
var Constant_1 = require("@/Constant");
var js_cookie_1 = require("js-cookie");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var reactstrap_1 = require("reactstrap");
var UserSocialApp_1 = require("./UserSocialApp");
var Hooks_1 = require("@/ReduxToolkit/Hooks");
exports.UserForm = function () {
    var i18LangStatus = Hooks_1.useAppSelector(function (store) { return store.langSlice; }).i18LangStatus;
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    var _b = react_1.useState("test123@gmail.com"), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState("Test@123"), password = _c[0], setPassword = _c[1];
    var router = navigation_1.useRouter();
    var formSubmitHandle = function (event) {
        event.preventDefault();
        if (email === "test123@gmail.com" && password === "Test@123") {
            js_cookie_1["default"].set("mofi_token", JSON.stringify(true));
            router.push("/" + i18LangStatus + "/dashboard/default_dashboard");
            react_toastify_1.toast.success("login successful");
        }
        else {
            alert("Please Enter Valid Email Or Password");
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(link_1["default"], { className: "logo", href: "/" + i18LangStatus + "/dashboard/default_dashboard" },
                React.createElement(image_1["default"], { width: 100, height: 35, className: "img-fluid for-light", src: Constant_1.ImagePath + "/logo/logo.png", alt: "login page" }),
                React.createElement(image_1["default"], { width: 100, height: 35, className: "img-fluid for-dark", src: Constant_1.ImagePath + "/logo/logo_dark.png", alt: "login page" }))),
        React.createElement("div", { className: "login-main" },
            React.createElement(reactstrap_1.Form, { className: "theme-form", onSubmit: formSubmitHandle },
                React.createElement("h4", null, Constant_1.SignInToAccount),
                React.createElement("p", null, "Enter your email & password to login"),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { className: "col-form-label" }, Constant_1.EmailAddressLogIn),
                    React.createElement(reactstrap_1.Input, { type: "text", defaultValue: email, onChange: function (event) { return setEmail(event.target.value); }, placeholder: "test123@gmail.com" })),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { className: "col-form-label" }, Constant_1.Password),
                    React.createElement("div", { className: "position-relative" },
                        React.createElement(reactstrap_1.Input, { type: show ? "text" : "password", defaultValue: password, onChange: function (event) { return setPassword(event.target.value); }, placeholder: "Test@123" }),
                        React.createElement("div", { className: "show-hide", onClick: function () { return setShow(!show); } },
                            React.createElement("span", { className: "show" }, " ")))),
                React.createElement(reactstrap_1.FormGroup, { className: "mb-0" },
                    React.createElement("div", { className: "checkbox p-0" },
                        React.createElement(reactstrap_1.Input, { id: "checkbox1", type: "checkbox" }),
                        React.createElement(reactstrap_1.Label, { className: "text-muted", htmlFor: "checkbox1" }, Constant_1.RememberPassword)),
                    React.createElement("div", { className: "text-end mt-3" },
                        React.createElement(reactstrap_1.Button, { color: "primary", block: true, className: "w-100" }, Constant_1.SignIn))),
                React.createElement("h6", { className: "text-muted mt-4 or" }, Constant_1.OrSignInWith),
                React.createElement(UserSocialApp_1.UserSocialApp, null),
                React.createElement("p", { className: "mt-4 mb-0 text-center" },
                    Constant_1.DontHaveAccount,
                    React.createElement(link_1["default"], { className: "ms-2", href: "/" + i18LangStatus + "/authentication/registersimple" }, Constant_1.CreateAccount))))));
};
