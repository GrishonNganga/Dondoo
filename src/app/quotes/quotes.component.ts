import { Component, OnInit, ElementRef } from '@angular/core';

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
     this.quote = new Quote(quoteForm.value.author, quoteForm.value.addedQuote, 0,0, false, false, quoteForm.value.sayer, new Date(2019, 7, 19));

     this.quotesList.push(this.quote);
     quoteForm.resetForm();
     this.show = !this.show;
     this.add = !this.add;
   }


   deleteQuote(index){
     this.quotesList.splice(index, 1);
   }

   showDescription(index){
     this.quotesList[index].showDescription = !this.quotesList[index].showDescription;
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
    new Quote("Grishon Gikima", "If it's alright with you!", 10, 0, false, true, "Grishon Gikima", new Date(1999, 3, 12)),
    new Quote("Winnie Muthoni", "I am an innovator!", 100, 0, true, false, "Nelson Mandela", new Date(1997, 12,2)),
    new Quote("J Cole", "I am from Fayetnaam!", 1000, 0, true, false, "J Cole", new Date(2008, 10, 16))
  ];
  ngOnInit(): void {
  }

}
