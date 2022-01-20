"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("../../utilities/resize"));
const path_1 = __importDefault(require("path"));
const outPath = path_1.default.join(__dirname, '../../../src/assets/thumbnail');
const inPath = path_1.default.join(__dirname, '../../../src/assets/full');
describe('Image resize test', () => {
    it('Image is created and resized', () => {
        const filename = '40_winter_way';
        const height = 10;
        const width = 10;
        expect((0, resize_1.default)(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
