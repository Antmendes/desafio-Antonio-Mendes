class CaixaDaLanchonete {

    calcularValorDaCompra(formaDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
          }
          const metodoDePagamentoValidas = ['dinheiro', 'debito', 'credito']

      
          let valorTotal = 0;
      
          for (const itemInfo of itens) {
            const [item, quantidade] = itemInfo.split(',');
      
            if (!(item in cardapio)) {
              return 'Item inválido!';
            }

            if (item === 'chantily'  && !itens.includes(`cafe,${quantidade}`)) {
                return 'Item extra não pode ser pedido sem o principal';
              }

              if (item === 'queijo'  && !itens.includes(`sanduiche,${quantidade}`)) {
                return 'Item extra não pode ser pedido sem o principal';
              }
      
            const valorItem = cardapio[item] * parseInt(quantidade);
      
            
      
            valorTotal += valorItem;
          }
      
          if (metodoDePagamentoValidas.indexOf(formaDePagamento) === -1) {
            return 'Forma de pagamento inválida!';
          }
      
          if (valorTotal  === 0) {
            return 'Não há itens no carrinho de compra!';
          }
      
          if (!itens ) {
            return 'Quantidade inválida!';
          }
      
          if (formaDePagamento === 'dinheiro') {
            valorTotal *= 0.95; 
          } else if (formaDePagamento === 'credito') {
            valorTotal *= 1.03; 
          }

          
      
          return `R$ ${valorTotal.toFixed(2).toString().replace(".", ",")}`;
        }
    }



export { CaixaDaLanchonete };


