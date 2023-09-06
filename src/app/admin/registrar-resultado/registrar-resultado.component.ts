import { Component } from '@angular/core';
import { ExamenService } from '../services/examen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultadoService } from '../services/resultado.service';


@Component({
  selector: 'app-registrar-resultado',
  templateUrl: './registrar-resultado.component.html',
  styleUrls: ['./registrar-resultado.component.css']
})
export class RegistrarResultadoComponent {
  register!:FormGroup;
  constructor(private examen:ExamenService,private  fb:FormBuilder,private resultado:ResultadoService) { }
  selectedFile?: File;
  url?:string;
  ngOnInit(): void {
    this.register=this.initForm();
  }

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0];

  }
  initForm():FormGroup{
    return this.fb.group({
    examenId:['',[Validators.required]],
    userId:['',[Validators.required]],
    });
    }


onUpload() {
  if (this.selectedFile) {
  const formData = new FormData();
  formData.append('file', this.selectedFile, this.selectedFile?.name);
  this.examen.uploadexam(formData).subscribe(
    (data)=>{
      this.url=(data as any).result;
    },(error)=>{
      console.log(error)
    }
  )
}
}
 obtenerFechaEnFormato(): string {
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes ya que los meses en JavaScript son de 0 a 11
  const día = fechaActual.getDate().toString().padStart(2, '0');

  return `${año}/${mes}/${día}`;
}

saveExam(){
  if(this.register.valid){
    const fechaHoy = this.obtenerFechaEnFormato();
    const data={
      userId:this.register.value.userId,
      examenId:this.register.value.examenId,
      resultadoDate:fechaHoy,
      url:this.url

    }
    this.resultado.saveResultado(data).subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )

  }

}

}
