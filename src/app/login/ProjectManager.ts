export class ProjectManager {
    userName: string = "";
    passWord: string = "";

    constructor(name: string, pass: string) {
        this.userName = name;
        this.passWord = pass;
    }
}