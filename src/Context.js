import React, { Component } from 'react';
import {storeProduct, detailProduct, storeProducts} from './data';

const ProductContext = React.createContext();
//Le Contexte offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau.
//Provider
//Consumer

 class ProductProvider extends Component {
     state = {
         products: storeProducts, 
         detailProduct: detailProduct
     }

     //methods 
     handleDetail = () =>{
         console.log('hello from detail')
     }

     addToCart = () =>{
        console.log('hello from add to cart')
    }

    render() {
        return (
            <ProductContext.Provider value={{
               ...this.state,
               handleDetail:this.handleDetail,
               addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};