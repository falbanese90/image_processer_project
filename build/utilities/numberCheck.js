"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberCheck = (num1, num2) => {
    if (num1 >= 0 && num2 >= 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = numberCheck;
