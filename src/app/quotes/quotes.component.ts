import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  show: boolean;
  add: boolean;
  quote: Quote;
  constructor() {
    this.show = true;
    this.add = false;
   }

   addQuote(){
     this.show = !this.show;
     this.add = !this.add;
   }


   addAQuote(quoteForm){
     this.quote = new Quote(quoteForm.value.author, quoteForm.value.addedQuote, 0,0, false, false, quoteForm.value.sayer);

     this.quotesList.push(this.quote);
     quoteForm.resetForm();
     this.show = !this.show;
     this.add = !this.add;
   }


   deleteQuote(index){
     this.quotesList.splice(index, 1);
   }


   upVote(index){
     if(this.quotesList[index].self){
       this.quotesList[index].self = !this.quotesList[index].self;
       this.quotesList[index].upvote -=1;
     }else{
       if(this.quotesList[index].unlike){
         this.quotesList[index].unlike = !this.quotesList[index].unlike;
       }
      this.quotesList[index].self = !this.quotesList[index].self;
      this.quotesList[index].upvote +=1;
     }
   }

   downVote(index){
    if(this.quotesList[index].unlike){
      this.quotesList[index].unlike = !this.quotesList[index].unlike;
      this.quotesList[index].downvote -=1;
      this.quotesList[index].upvote +=1;
    }else{
      if(this.quotesList[index].self){
        this.quotesList[index].self = !this.quotesList[index].self;
        this.quotesList[index].upvote -=1;
        this.quotesList[index].downvote +=1;
      }else{
        this.quotesList[index].unlike = !this.quotesList[index].unlike;
        this.quotesList[index].downvote +=1;
        this.quotesList[index].upvote -=1;
      }
     
    }
   }
  quotesList: Quote[] = [
    new Quote("Grishon Gikima", "If it's alright with you!", 10, 0, false, true, "Grishon Gikima"),
    new Quote("Winnie Muthoni", "I am an innovator!", 100, 0, true, false, "Nelson Mandela"),
    new Quote("J Cole", "I am from Fayetnaam!", 1000, 0, true, false, "J Cole")
  ];
  ngOnInit(): void {
  }

}
