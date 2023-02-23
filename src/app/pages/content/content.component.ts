import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string ="https://www.srzd.com/wp-content/uploads/2023/02/52702219979_8841e564ef_c.jpg"
  contentDescription: string ="O samba da Viradouro já era um dos melhores no pré-carnaval e com o casamento Ciça/Zé Paulo ao vivo, arrebentou. Diferente do ano passado quando a escola parece não ter achado o andamento mais correto para a carta, esse ano encontrou com sobras. A obra tem momentos que ajudam demais o canto da escola, tanto que a bateria abusou de paradinhas longas. Como é bom cantar um bom samba. Espetacular"
  contentTitle:string =""
  constructor() { }

  ngOnInit(): void {
  }

}
