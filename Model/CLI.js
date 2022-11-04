"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = void 0;
var FileSystem_1 = require("./FileSystem");
var CLI = /** @class */ (function () {
    function CLI() {
        this.CLITextInput = "";
        this.histories = [
            "",
        ];
        this.historiesCnt = 0;
        this.User = new FileSystem_1.FileSystem();
        this.CLITextOutputDiv = document.getElementById("CLIOutputDiv");
        this.vueCLI = document.getElementById("content");
    }
    Object.defineProperty(CLI.prototype, "getCLITextInput", {
        get: function () {
            return this.CLITextInput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "setCLITextInput", {
        set: function (input) {
            this.CLITextInput = input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "getHistories", {
        get: function () {
            return this.histories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "setHistories", {
        set: function (historiy) {
            this.histories.push(historiy);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "getHistoriesCnt", {
        get: function () {
            return this.historiesCnt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "setHistoriesCnt", {
        set: function (cnt) {
            this.historiesCnt = this.getHistoriesCnt + cnt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "getUserData", {
        get: function () {
            return this.User;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "getCLITextOutputDiv", {
        get: function () {
            return this.CLITextOutputDiv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CLI.prototype, "getVueCLI", {
        get: function () {
            return this.vueCLI;
        },
        enumerable: false,
        configurable: true
    });
    CLI.prototype.commandLineParser = function () {
        var parsedStringInputArray = this.CLITextInput.trim().split(" ");
        return parsedStringInputArray;
    };
    return CLI;
}());
exports.CLI = CLI;
