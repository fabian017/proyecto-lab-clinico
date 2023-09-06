import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/admin/services/examen.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  examenes : any;

  constructor(private examenService:ExamenService) { }

  ngOnInit(): void {
    this.examenService.getExam().subscribe(
      (data)=>{this.examenes=data},
      (error)=>{alert('Ha ocurrido un error')}
    )
  }





}
