"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./users");
const app = (0, express_1.default)();
app.listen(5500, () => {
    console.log(users_1.usr);
    console.log('Server is started');
});
//# sourceMappingURL=app.js.map