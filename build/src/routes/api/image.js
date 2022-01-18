"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizer_1 = __importDefault(require("../../utilities/resizer"));
const image = express_1.default.Router();
image.get('/', resizer_1.default, (req, res) => {
    res.send('Main processing api');
});
exports.default = image;
