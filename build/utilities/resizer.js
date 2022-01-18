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
    let height = Number(req.query.height);
    let width = Number(req.query.width);
    function resize(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, sharp_1.default)(__dirname + `/${filename}.png`)
                    .resize(width, height)
                    .toFile(__dirname + `/new_pic.png`);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    resize(filename);
    res.sendFile(__dirname + '/new_pic.png');
};
exports.default = resizer;
