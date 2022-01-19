"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("../../utilities/resize"));
describe('Image resize test', () => {
    it('Image is created and resized', () => {
        let inPath = './build/assets/full';
        let outPath = './build/assets/thumbnail';
        let filename = '40_winter_way';
        let height = 10;
        let width = 10;
        expect((0, resize_1.default)(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
