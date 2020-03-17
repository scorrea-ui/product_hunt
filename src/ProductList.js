import React from "react";
import Product from "./Product";
import { products } from "./const";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products
    });
  }

  handleProductUpVote = (id, vote) => {
    const productArray = [...this.state.products];
    const productIndex = productArray.findIndex(product => product.id === id);

    productArray[productIndex].votes = vote + 1;
    this.setState({
      products: productArray
    });
  };

  render() {
    const showproducts = this.state.products.sort((a, b) => b.votes - a.votes);
    const productComponents = showproducts.map(product => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={(id, vote) => this.handleProductUpVote(id, vote)}
      />
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}
