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
var _a;
exports.__esModule = true;
exports.removeBrand = exports.addNewBrand = exports.removeGender = exports.filterGender = exports.setColView = exports.setListView = exports.setIsFilter = exports.filterSearchBy = exports.filterSortBy = exports.filterPrice = exports.filterColor = exports.setSideBarOn = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    sideBarOn: false,
    isFilter: false,
    listView: false,
    colClass: "col-xl-3 col-sm-6 xl-4",
    filter: {
        brand: ["Diesel", "Hudson", "Lee", "Spykar"],
        color: "",
        value: { min: 100, max: 950 },
        sortBy: "",
        searchBy: "",
        category: ["Men's Jacket", "Women's T-shirt", "Men's T-shirt", "Men's Jacket", "Women's Top"]
    }
};
var FilterSlice = toolkit_1.createSlice({
    name: "FilterSlice",
    initialState: initialState,
    reducers: {
        filterGender: function (state, action) {
            state.filter.category.push(action.payload);
        },
        removeGender: function (state, action) {
            state.filter.category = state.filter.category.filter(function (category) { return category !== action.payload; });
        },
        addNewBrand: function (state, action) {
            state.filter.brand.push(action.payload);
        },
        removeBrand: function (state, action) {
            state.filter.brand.splice(action.payload.index, 1);
            state.filter = __assign(__assign({}, state.filter), { brand: action.payload.category });
        },
        setIsFilter: function (state) {
            state.isFilter = !state.isFilter;
        },
        setSideBarOn: function (state) {
            state.sideBarOn = !state.sideBarOn;
        },
        setListView: function (state, action) {
            state.listView = action.payload;
        },
        setColView: function (state, action) {
            state.colClass = action.payload;
        },
        filterSearchBy: function (state, action) {
            state.filter = __assign(__assign({}, state.filter), { searchBy: action.payload });
        },
        filterColor: function (state, action) {
            state.filter = __assign(__assign({}, state.filter), { color: action.payload });
        },
        filterSortBy: function (state, action) {
            state.filter = __assign(__assign({}, state.filter), { sortBy: action.payload });
        },
        filterPrice: function (state, action) {
            state.filter = __assign(__assign({}, state.filter), { value: { min: action.payload[0], max: action.payload[1] } });
        }
    }
});
exports.setSideBarOn = (_a = FilterSlice.actions, _a.setSideBarOn), exports.filterColor = _a.filterColor, exports.filterPrice = _a.filterPrice, exports.filterSortBy = _a.filterSortBy, exports.filterSearchBy = _a.filterSearchBy, exports.setIsFilter = _a.setIsFilter, exports.setListView = _a.setListView, exports.setColView = _a.setColView, exports.filterGender = _a.filterGender, exports.removeGender = _a.removeGender, exports.addNewBrand = _a.addNewBrand, exports.removeBrand = _a.removeBrand;
exports["default"] = FilterSlice.reducer;
