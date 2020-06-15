export class Quote {
    showDescription: boolean;
    constructor(public author: string, public quote: string, public upvote: number, public downvote:number, public self: boolean, public unlike: boolean, public quoteSayer: string){
    this.showDescription = false;
    }
}
