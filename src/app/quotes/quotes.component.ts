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
     this.quote = new Quote("", quoteForm.value.addedQuote, 0,0, false, false);

     this.quotesList.push(this.quote);
     quoteForm.resetForm();
     this.show = !this.show;
     this.add = !this.add;
   }


   deleteQuote(index){
     this.quotesList.splice(index, 1);
   }


   upVote(){

   }

  quotesList: Quote[] = [
    new Quote("Grishon Gikima", "If it's alright with you!", 10, 0, false, true),
    new Quote("Winnie Muthoni", "I am an innovator!", 100, 0, true, false),
    new Quote("J Cole", "I am from Fayetnaam!", 1000, 0, true, false)
  ];
  ngOnInit(): void {
  }

}
