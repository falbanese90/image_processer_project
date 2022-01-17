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
const sharp_1 = __importDefault(require("sharp"));
const resizer = (req, res, next) => {
    let filename = req.query.filename;
    let height = req.query.height;
    let width = req.query.width;
    const resize = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)('../api/utilities/40_winter_way.png')
                .resize({ width: 100 })
                .toFile('new_pic.png');
        }
        catch (e) {
            console.log(`Error occured: ${e}`);
        }
    });
};
exports.default = resizer;
