import { Component, OnInit } from '@angular/core';
import { PiezaService } from '../../services/pieza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-pieza',
  templateUrl: './eliminar-pieza.component.html',
  styleUrls: ['./eliminar-pieza.component.css'],
})
export class EliminarPiezaComponent implements OnInit {
  codigo: string;

  constructor(private piezaService: PiezaService) {}

  ngOnInit(): void {}

  delete(codigo: string) {
    if (codigo == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 30000,
      });
    } else {
      this.codigo = codigo;
      this.piezaService.delete(codigo).subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000,
        });
        window.location.reload();
      });
    }
  }
}
