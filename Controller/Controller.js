"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var view_1 = require("../View/view");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.callHistoriesByKeyDown = function (CLI) {
        document.addEventListener("keydown", function (event) {
            if (event.key == "ArrowUp") {
                view_1.View.cursorUpToGetHistories(CLI);
            }
            else if (event.key == "ArrowDown") {
                view_1.View.cursorDownToGetHistories(CLI);
            }
        });
    };
    Controller.executeCLI = function (CLI) {
        var parsedStringInputArray = CLI.commandLineParser();
        view_1.View.appendEchoParagraph(CLI);
        view_1.View.appendResultParagraph(CLI, view_1.View.evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray, CLI));
        view_1.View.resetCLITextInput(CLI);
    };
    return Controller;
}());
exports.Controller = Controller;
