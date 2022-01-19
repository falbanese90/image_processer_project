"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const resize_1 = __importDefault(require("./resize"));
let inPath = './build/assets/full';
let outPath = './build/assets/thumbnail';
const resizer = (req, res, next) => {
    if (req.query.filename && req.query.height && req.query.width) {
        let filename = req.query.filename;
        let height = Number(req.query.height);
        let width = Number(req.query.width);
        try {
            (0, resize_1.default)(filename, width, height, inPath, outPath);
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
        if (fs_1.default.existsSync(outPath + `/${filename}_${height}x${width}.png`)) {
            res.sendFile(`${filename}_${height}x${width}.png`, {
                root: outPath,
            });
        }
        else {
            (0, resize_1.default)(filename, width, height, inPath, outPath);
            setTimeout(() => {
                res.sendFile(`${filename}_${height}x${width}.png`, {
                    root: outPath,
                });
            }, 2000);
        }
    }
    else {
        res.send('Enter params // filename = 40_winter_way, height, width');
    }
};
exports.default = resizer;
