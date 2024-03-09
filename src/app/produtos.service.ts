import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  getAll(){
    return this.produtos;
  }

  getOne(id: number){
    return this.produtos.find(produto => produto.id == id)
  }
}
