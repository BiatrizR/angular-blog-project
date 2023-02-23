import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
//criando as propriedades dinamicas de small cards, tornando -as inputaveis
  @Input()
  photoCover: string="";
  @Input()
  cardTitle: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
