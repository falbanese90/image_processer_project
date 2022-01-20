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
const resize_1 = __importDefault(require("./resize"));
const numberCheck_1 = __importDefault(require("./numberCheck"));
const inPath = './src/assets/full';
const outPath = './src/assets/thumbnail';
const resizer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.filename && req.query.height && req.query.width) {
        const filename = req.query.filename;
        const height = Number(req.query.height);
        const width = Number(req.query.width);
        if ((0, numberCheck_1.default)(height, width) && filename == '40_winter_way') {
            const a = () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield (0, resize_1.default)(filename, width, height, inPath, outPath);
                }
                catch (e) {
                    res.send(e);
                }
            });
            yield a();
            res.sendFile(`${filename}_${height}x${width}.png`, {
                root: outPath,
            });
        }
        else {
            res.send('Params are invalid');
        }
    }
    else {
        res.send('Insert params');
    }
});
exports.default = resizer;
