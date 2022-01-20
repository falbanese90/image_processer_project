"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("../../utilities/resize"));
describe('Image resize test', () => {
    it('Image is created and resized', () => {
        const inPath = './build/assets/full';
        const outPath = './build/assets/thumbnail';
        const filename = '40_winter_way';
        const height = 10;
        const width = 10;
        expect((0, resize_1.default)(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
