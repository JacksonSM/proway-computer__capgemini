import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }
  removeProdutoCarrinho(produtoId: number){
    this.carrinhoService.removerProdutoCarinho(produtoId);
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0);
  }
  comprar(){
    alert("Parabens, voce finalizou sua compra!!")
    this.carrinhoService.limparCarrinho()
    this.router.navigate(["produtos"]);
  }
}
