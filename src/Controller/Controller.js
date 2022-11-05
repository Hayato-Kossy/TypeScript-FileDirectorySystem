"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var View_1 = require("../View/View");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.callHistoriesByKeyDown = function (CLI) {
        document.addEventListener("keydown", function (event) {
            if (event.key == "ArrowUp") {
                console.log(true);
                View_1.View.cursorUpToGetHistories(CLI);
            }
            else if (event.key == "ArrowDown") {
                View_1.View.cursorDownToGetHistories(CLI);
            }
        });
    };
    Controller.executeCLI = function (CLI) {
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                var parsedStringInputArray = CLI.commandLineParser();
                View_1.View.appendEchoParagraph(CLI);
                View_1.View.appendResultParagraph(CLI, View_1.View.evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray, CLI));
                View_1.View.resetCLITextInput(CLI);
            }
        });
    };
    Controller.activateCLI = function (CLI) {
        this.callHistoriesByKeyDown(CLI);
        this.executeCLI(CLI);
    };
    return Controller;
}());
exports.Controller = Controller;
