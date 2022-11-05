import { View } from "../View/View";
import { CLI } from "../Model/CLI";

export class Controller{

    static callHistoriesByKeyDown(CLI:CLI):void{
        document.addEventListener("keydown", function(event) {
            if (event.key == "ArrowUp"){
                console.log(true)
                View.cursorUpToGetHistories(CLI);
            } else if (event.key == "ArrowDown"){
                View.cursorDownToGetHistories(CLI);
            }
        });
    }

    static executeCLI(CLI:CLI):void{
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter"){
                let parsedStringInputArray:string[] = CLI.commandLineParser()
                View.appendEchoParagraph(CLI)
                View.appendResultParagraph(CLI,View.evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray,CLI))
                View.resetCLITextInput(CLI)        
            }
        });
    }

    static activateCLI(CLI:CLI):void{
        this.callHistoriesByKeyDown(CLI);
        this.executeCLI(CLI);
    }
}