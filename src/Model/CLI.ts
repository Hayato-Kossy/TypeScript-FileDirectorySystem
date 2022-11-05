import { FileSystem } from "./FileSystem";

export class CLI{
    private CLITextInput:string;
    private histories:[string];
    private historiesCnt:number;
    private User:FileSystem;
    private CLITextInputDiv:HTMLInputElement
    private CLITextOutputDiv:HTMLElement;
    private vueCLI:HTMLElement|null;

    constructor(){
        this.CLITextInput = ""
        this.histories = [
            "",
        ];
        this.historiesCnt = 0;
        this.User = new FileSystem();
        this.CLITextInputDiv = document.getElementById("CLIInputDiv") as HTMLInputElement;
        this.CLITextOutputDiv = document.getElementById("CLIOutputDiv") as HTMLElement;
        this.vueCLI = document.getElementById("content");
    }

    public get getCLITextInput():string{
        return this.CLITextInput;
    }

    public set setCLITextInput(input:string){
        this.CLITextInput = input;
    }

    public get getHistories():[string]{
        return this.histories;
    }

    public set setHistories(historiy:string){
        this.histories.push(historiy);
    }

    public get getHistoriesCnt():number{
        return this.historiesCnt;
    }

    public set setHistoriesCnt(cnt:number){
        this.historiesCnt = cnt;
    }

    public get getUserData():FileSystem{
        return this.User;
    }

    public get getCLITextOutputDiv():HTMLElement|null{
        return this.CLITextOutputDiv;
    }

    public get getVueCLI():HTMLElement|null{
        return this.vueCLI;
    }

    public get getCLITextInputDiv():HTMLInputElement{
        return this.CLITextInputDiv;
    }

    public set setCLITextInputDiv(text:string){
        this.CLITextInputDiv.value = text;
    }
    
    public commandLineParser():string[]{
        let parsedStringInputArray = this.CLITextInputDiv.value.trim().split(" ");
        this.setCLITextInput = this.CLITextInputDiv.value;
        console.log(parsedStringInputArray)
        console.log(this.setCLITextInput)
        return parsedStringInputArray;
    }
}