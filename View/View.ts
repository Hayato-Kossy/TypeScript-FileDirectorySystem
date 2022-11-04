import { CLI } from "../Model/CLI"

export class View{

    static appendEchoParagraph(CLI:CLI):void{
        CLI.getCLITextOutputDiv!.innerHTML += 
        `
            <p class="m-0 output-text align-top"> 
            <span>User</span>
            <span>@</span>
            <span>MacBook % ${CLI.getCLITextInput}
            </span>
            </p>
        `
        if (CLI.getCLITextInput !== "" && CLI.getCLITextInput !== null) CLI.getHistories.push(CLI.getCLITextInput)
    }

    static appendResultParagraph(CLI:CLI,message:string):void{
        CLI.getCLITextOutputDiv!.innerHTML +=
        `
        <p class="m-0 output-text">
        <span>User</span> % ${message}
        </p>
        `
    }

    static resetCLITextInput(CLI:CLI):void{
        CLI.setCLITextInput = ""
        CLI.getVueCLI!.scrollTo(0, CLI.getVueCLI!.scrollHeight)
    }

    static cursorUpToGetHistories(CLI:CLI):void{
        if (CLI.getHistories.length > 0) {
            CLI.setCLITextInput = CLI.getHistories[CLI.getHistoriesCnt]
            CLI.setHistoriesCnt = CLI.getHistoriesCnt - 1
            if (0 > CLI.getHistoriesCnt) CLI.setHistoriesCnt = CLI.getHistories.length - 1
        }
    }

    static cursorDownToGetHistories(CLI:CLI):void{
        if (CLI.getHistories.length > 0) {
            CLI.setCLITextInput = CLI.getHistories[CLI.getHistoriesCnt]
            CLI.setHistoriesCnt = CLI.getHistoriesCnt + 1
            if (CLI.getHistories.length <= CLI.getHistoriesCnt) CLI.setHistoriesCnt = 0
        }
    }

    static evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray:string[],CLI:CLI){
        let result:string = "";
        console.log(parsedStringInputArray);
        let argA:string = parsedStringInputArray[1];
        let argB:string = parsedStringInputArray[2];
        let commandName:string = parsedStringInputArray[0];

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
                result = CLI.getUserData.tree(argA)
                break
            default:
                result = "No such command";
        }
        return result;
    }
}
