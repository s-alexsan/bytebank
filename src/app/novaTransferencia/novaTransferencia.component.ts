import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './novaTransferencia.component.html',
  styleUrls: ['./novaTranferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    // this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        // this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
