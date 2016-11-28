export interface Itodo {
    title: string;
    done: boolean;
}

export class Todo implements Itodo {
    title: string;
    done: boolean;
    constructor(title: string){
        this.title = title;
        this.done = false;
    }

}