import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  constructor() { }

  @Input() quoteDescription: string;
  @Input() showDescription: boolean;
  ngOnInit(): void {
  }

}
