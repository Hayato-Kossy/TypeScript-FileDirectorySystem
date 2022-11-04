import { View } from "../View/view";
import { CLI } from "../Model/CLI";

export class Controller{

    static callHistoriesByKeyDown(CLI:CLI):void{
        document.addEventListener("keydown", function(event) {
            if (event.key == "ArrowUp"){
                View.cursorUpToGetHistories(CLI);
            } else if (event.key == "ArrowDown"){
                View.cursorDownToGetHistories(CLI);
            }
        });
    }

    static executeCLI(CLI:CLI):void{
        let parsedStringInputArray:string[] = CLI.commandLineParser()
        View.appendEchoParagraph(CLI)
        View.appendResultParagraph(CLI,View.evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray,CLI))
        View.resetCLITextInput(CLI)
    }
}