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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkFile_1 = __importDefault(require("../../utilities/checkFile"));
describe('Expects file does exist', () => {
    it('Image exists, checked successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = './src/assets/thumbnail/40_winter_way_10x10.png';
        expect(yield (0, checkFile_1.default)(filePath)).toBe(true);
    }));
});
