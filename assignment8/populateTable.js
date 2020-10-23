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
exports.createRow = exports.capitalize = exports.addDataRows = void 0;
var dataService_1 = require("./dataService");
var dataService_2 = require("./dataService");
exports.addDataRows = function () { return __awaiter(void 0, void 0, void 0, function () {
    var ds, response, table_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ds = new dataService_2.DataService();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ds.fetchData()];
            case 2:
                response = _a.sent();
                if (dataService_1.debug) {
                    console.log('Response: ', JSON.stringify(response));
                    console.log('fetched data');
                    console.log('getting data', ds.getData());
                }
                table_1 = document.getElementsByTagName('table');
                ds.getData()
                    // I think some type (probably person) needs to include this...
                    // .results
                    .forEach(function (element) {
                    exports.createRow(table_1, element);
                });
                if (dataService_1.debug) {
                    console.log('populated table');
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log('Error adding data rows: ', err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Thanks to Joelvh on this StackOverflow page for this function
//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}
exports.capitalize = capitalize;
// need to update this to update the table successfully.
exports.createRow = function (parentElem, rowData) {
    if (dataService_1.debug) {
        console.log('got inside createRow');
    }
    //create a new row to populate
    var row = parentElem.insertRow(1);
    if (dataService_1.debug) {
        console.log("this is what createRow() got...", rowData);
    }
    //populate the row with cells for each param
    var cell = row.insertCell(0);
    cell.innerHTML = rowData.name.first + " " + rowData.name.last;
    var cell1 = row.insertCell(1);
    cell1.innerHTML = capitalize(rowData.gender);
    var cell2 = row.insertCell(2);
    cell2.innerHTML = rowData.location.street.number + " " + rowData.location.street.name;
    var cell3 = row.insertCell(3);
    cell3.innerHTML = rowData.dob.age.toString();
    var cell4 = row.insertCell(4);
    cell4.innerHTML = rowData.phone;
    var cell5 = row.insertCell(5);
    var image = document.createElement('img');
    image.src = rowData.picture.large;
    cell5.append(image);
};
