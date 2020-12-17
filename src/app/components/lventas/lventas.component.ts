import { Component, OnInit } from '@angular/core';
import {VentasService } from 'src/app/services/ventas.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-lventas',
  templateUrl: './lventas.component.html',
  styleUrls: ['./lventas.component.css']
})
export class LventasComponent implements OnInit {
  lists :any;
  constructor(public _ventasService : VentasService) { }

  ngOnInit(): void {
  }
  Find(form: NgForm){
   form.value.nombre;
    this._ventasService.getVentas(form.value.nombre).subscribe(
      (data)=>{
          console.log(data['cursor_ventasx']);
          this.lists = data['cursor_ventasx']

      }
    )


  }




}
