import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../service/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {


  listResultados :any;
  constructor(private Resultados:ResultadosService) { }

  ngOnInit(): void {
   this.Resultados.getExam().subscribe((data)=>{this.listResultados=data})
  }

  download(url:string){

    window.open(url, '_blank');
  }

}
