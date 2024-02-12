"use strict";
exports.__esModule = true;
exports.FormPost = void 0;
var reactstrap_1 = require("reactstrap");
var RadioTypeForm_1 = require("./RadioTypeForm");
var react_bootstrap_typeahead_1 = require("react-bootstrap-typeahead");
var Constant_1 = require("@/Constant");
var Blog_1 = require("@/Data/Miscellaneous/Blog");
var react_simplemde_editor_1 = require("react-simplemde-editor");
exports.FormPost = function () {
    return (React.createElement(reactstrap_1.Form, { className: " needs-validation" },
        React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { sm: "12" },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { check: true },
                        Constant_1.PostTitle,
                        ":"),
                    React.createElement(reactstrap_1.Input, { type: "text", placeholder: Constant_1.PostTitlePlaceholder })),
                React.createElement(RadioTypeForm_1["default"], null),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement("div", { className: "col-form-Label" },
                        Constant_1.PostCategory,
                        ": ",
                        React.createElement(react_bootstrap_typeahead_1.Typeahead, { id: "multiple-typeahead", className: "mt-2", defaultSelected: Blog_1.PostTypeData, labelKey: "name", multiple: true, options: Blog_1.PostTypeData, placeholder: Constant_1.PostTypePlaceholder }))),
                React.createElement("div", { className: "email-wrapper" },
                    React.createElement("div", { className: "theme-form" },
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { check: true },
                                Constant_1.PostContent,
                                ":"),
                            React.createElement(react_simplemde_editor_1["default"], { id: "editor_container", value: Constant_1.BlogPostText, options: { autofocus: true, spellChecker: false } }))))))));
};
