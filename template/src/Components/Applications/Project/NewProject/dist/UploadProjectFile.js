"use strict";
exports.__esModule = true;
var Constant_1 = require("@/Constant");
var react_dropzone_uploader_1 = require("react-dropzone-uploader");
var react_toastify_1 = require("react-toastify");
var reactstrap_1 = require("reactstrap");
var UploadProjectFile = function () {
    var getUploadParams = function () {
        return { url: "https://httpbin.org/post" };
    };
    var handleSubmit = function (allFiles) {
        allFiles.forEach(function (f) { return f.remove(); });
        react_toastify_1.toast.success("Dropzone successfully submitted !");
    };
    var Data = function () {
        return (React.createElement("div", { className: "dropzone-wrapper" },
            React.createElement("div", { className: "dz-message needsclick" },
                React.createElement("i", { className: "icon-cloud-up fs-3 text-success" }),
                React.createElement("h6", { className: "f-w-600" }, "Drop files here or click to upload."),
                React.createElement("h6", { className: "note needsclick mt-1" },
                    "(This is just a demo dropzone. Selected files are ",
                    React.createElement("strong", null, "not"),
                    " actually uploaded.)"))));
    };
    return (React.createElement(reactstrap_1.Row, null,
        React.createElement(reactstrap_1.Col, null,
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { check: true }, Constant_1.UploadProjectFiles),
                React.createElement(react_dropzone_uploader_1["default"], { getUploadParams: getUploadParams, onSubmit: handleSubmit, maxFiles: 1, inputContent: React.createElement(Data, null) })))));
};
exports["default"] = UploadProjectFile;
