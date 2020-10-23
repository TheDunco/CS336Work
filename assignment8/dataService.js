"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DataService = exports.debug = void 0;
// Psuedo dataservice class with built-in values
try {
    var fetch_1 = require('node-fetch');
}
catch (_a) { }
exports.debug = false;
var DataService = /** @class */ (function () {
    // data = [
    //     { name: "Duncan", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7890" },
    //     { name: "Joel", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7891" },
    //     { name: "Alex", gender: "M", address: "Alpha 12", age: 20, phoneNumber: "(123)456-7892" }
    // ];
    function DataService() {
        var _this = this;
        // Returns everything if no params are specified. 
        this.getData = function (numRecords) {
            return (numRecords === undefined ? _this.data
                : _this.data.slice(0, numRecords));
        };
        // fetchData will fetch the data from the api and put it into this.data
        this.fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var response, json, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    // wait for and fetch the data
                                    if (exports.debug) {
                                        console.log("fetching data");
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 6, , 7]);
                                    return [4 /*yield*/, fetch('https://randomuser.me/api/?results=10')
                                        // check if the response is ok
                                    ];
                                case 2:
                                    response = _a.sent();
                                    // check if the response is ok
                                    if (exports.debug) {
                                        console.log('is response ok?');
                                    }
                                    if (!!response.ok) return [3 /*break*/, 3];
                                    // response not ok, print error message and reject
                                    if (exports.debug) {
                                        console.log('no');
                                    }
                                    console.log('Looks like there was a problem. Status Code: ' +
                                        response.status);
                                    reject(response);
                                    return [3 /*break*/, 5];
                                case 3:
                                    // response is ok, resolve and set this.data to the fetched data
                                    if (exports.debug) {
                                        console.log('yes');
                                    }
                                    return [4 /*yield*/, response.json()];
                                case 4:
                                    json = _a.sent();
                                    if (exports.debug) {
                                        console.log('This is the data: ', json);
                                    }
                                    this.data = json;
                                    _a.label = 5;
                                case 5:
                                    ;
                                    return [3 /*break*/, 7];
                                case 6:
                                    err_1 = _a.sent();
                                    console.log('Fetch Error :-S', err_1);
                                    return [3 /*break*/, 7];
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        }); };
        this.data = [];
    }
    return DataService;
}());
exports.DataService = DataService;
// let ds = new DataService();
// console.log(ds.getData())
// console.log(ds.getData(1))
// console.log(ds.getData(2))
// console.log(ds.getData(3))
