import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortizacao',
  templateUrl: './amortizacao.component.html',
  styleUrls: ['./amortizacao.component.css'],
})
export class AmortizacaoComponent implements OnInit {
  @Input() valorParcela: String;
  @Input() parcelaAtuaal: String;
  @Input() taxaJuros: String;
  @Input() numParcelas: String;

  constructor() {}

  ngOnInit() {}
}
