"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var View = /** @class */ (function () {
    function View() {
    }
    View.appendEchoParagraph = function (CLI) {
        CLI.getCLITextOutputDiv.innerHTML +=
            "\n            <p class=\"m-0 output-text align-top\"> \n            <span>User</span>\n            <span>@</span>\n            <span>UsernoMacBook-Pro % ".concat(CLI.getCLITextInput, "\n            </span>\n            </p>\n        ");
        if (CLI.getCLITextInput !== "" && CLI.getCLITextInput !== null)
            CLI.getHistories.push(CLI.getCLITextInput);
    };
    View.appendResultParagraph = function (CLI, message) {
        CLI.getCLITextOutputDiv.innerHTML +=
            "\n        <p class=\"m-0 output-text\">\n        <span>User</span> % ".concat(message, "\n        </p>\n        ");
    };
    View.resetCLITextInput = function (CLI) {
        CLI.setCLITextInput = "";
        CLI.setCLITextInputDiv = "";
        CLI.getVueCLI.scrollTo(0, CLI.getVueCLI.scrollHeight);
    };
    View.cursorUpToGetHistories = function (CLI) {
        console.log(CLI.getHistories);
        console.log(CLI.getHistoriesCnt);
        CLI.setCLITextInputDiv = CLI.getHistories[CLI.getHistoriesCnt];
        CLI.setHistoriesCnt = CLI.getHistoriesCnt - 1;
        if (0 > CLI.getHistoriesCnt)
            CLI.setHistoriesCnt = CLI.getHistories.length - 1;
    };
    View.cursorDownToGetHistories = function (CLI) {
        console.log(CLI.getHistories);
        console.log(CLI.getHistoriesCnt);
        CLI.setCLITextInputDiv = CLI.getHistories[CLI.getHistoriesCnt];
        CLI.setHistoriesCnt = CLI.getHistoriesCnt + 1;
        if (CLI.getHistories.length <= CLI.getHistoriesCnt)
            CLI.setHistoriesCnt = 0;
    };
    View.evaluatedResultsStringFromParsedStringInputArray = function (parsedStringInputArray, CLI) {
        var result = "";
        console.log(parsedStringInputArray);
        var argA = parsedStringInputArray[1];
        var argB = parsedStringInputArray[2];
        var commandName = parsedStringInputArray[0];
        switch (commandName) {
            case "mkdir":
                result = CLI.getUserData.mkdir(argA);
                break;
            case "cd":
                result = CLI.getUserData.cd(argA);
                break;
            case "touch":
                result = CLI.getUserData.touch(argA);
                break;
            case "ls":
                result = CLI.getUserData.ls();
                break;
            case "pwd":
                result = CLI.getUserData.pwd();
                break;
            case "print":
                result = CLI.getUserData.print(argA);
                break;
            case "setContent":
                result = CLI.getUserData.setContent(argA, argB);
                break;
            case "rm":
                result = CLI.getUserData.rm(argA);
                break;
            case "mv":
                result = CLI.getUserData.mv(argA, argB);
                break;
            case "cp":
                result = CLI.getUserData.cp(argA, argB);
                break;
            case "tree":
                result = CLI.getUserData.tree(argA);
                break;
            case "help":
                result = "You can use tree, mkdir, cd, touch, ls, pwd, print, setContent, rm, mv, cp, command";
                break;
            default:
                result = "No such command";
        }
        return result;
    };
    return View;
}());
exports.View = View;
