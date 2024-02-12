"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.addToCartData = exports.removeCartData = exports.decrementData = exports.incrementData = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    cart: []
};
var CartSlice = toolkit_1.createSlice({
    name: "CartSlice",
    initialState: initialState,
    reducers: {
        incrementData: function (state, action) {
            var productId = action.payload.item.id;
            state.cart = state.cart.map(function (item) {
                if (productId === item.id) {
                    return __assign(__assign({}, item), { total: item.total + 1, sum: item.price * (item.total + 1) });
                }
                else {
                    return item;
                }
            });
        },
        decrementData: function (state, action) {
            state.cart = state.cart.map(function (item) { return (action.payload === item.id && item.total > 1 ? __assign(__assign({}, item), { total: item.total - 1, sum: item.price * (item.total - 1) }) : item); });
        },
        removeCartData: function (state, action) {
            state.cart = state.cart.filter(function (item) { return item.id !== action.payload; });
        },
        addToCartData: function (state, action) {
            var productId = action.payload.item.id;
            if (state.cart.findIndex(function (product) { return product.id === productId; }) !== -1) {
                state.cart = state.cart.reduce(function (cartAcc, product) {
                    if (product.id === productId) {
                        cartAcc.push(__assign(__assign({}, product), { total: product.total + action.payload.quantity, sum: product.price * (product.total + action.payload.quantity) }));
                    }
                    else {
                        cartAcc.push(product);
                    }
                    return cartAcc;
                }, []);
            }
            else {
                state.cart = __spreadArrays(state.cart, [__assign(__assign({}, action.payload.item), { total: action.payload.quantity, sum: action.payload.item.price * action.payload.item.total })]);
            }
        }
    }
});
exports.incrementData = (_a = CartSlice.actions, _a.incrementData), exports.decrementData = _a.decrementData, exports.removeCartData = _a.removeCartData, exports.addToCartData = _a.addToCartData;
exports["default"] = CartSlice.reducer;
