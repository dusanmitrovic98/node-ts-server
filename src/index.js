"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'src/public')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'src/public/index.html'));
});
app.listen(PORT, function () {
    console.log("App listening at http://localhost:".concat(PORT));
});
