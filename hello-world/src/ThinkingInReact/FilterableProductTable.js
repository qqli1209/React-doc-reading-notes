import './FilterableProductTable.css';

import React from 'react';

class ProductRow extends React.PureComponent {
  render() {
    const product=this.props.product;
    const className=product.stocked ? '' : 'no-stock';
    const name=<span className={ className }>{ product.name }</span>
    return (
      <tr>
        <td>{ name }</td>
        <td>{ product.price }</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.PureComponent {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2'>{ category }</th>
      </tr>
    );
  }
}

class ProductTable extends React.PureComponent {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(filterText) === -1) {
        return;
      }

      if(inStockOnly && !product.stocked) {
        return;
      }

      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={ product.category }
            key={ product.category }
          />
        );
      }
      rows.push(
        <ProductRow
          product={ product }
          key={ product.name }
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>            
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </table>
    );
  }
}

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleInStockChange=this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  handleInStockChange(event) {
    this.props.onInStockChange(event.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={ this.props.filterText }
          onChange={ this.handleFilterTextChange }
        />
        <p>
          <input
            type='checkbox'
            checked={ this.props.inStockOnly }
            onChange={ this.handleInStockChange }
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default class FilterableProductTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      filterText: '',
      inStockOnly: false
    };
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleInStockChange=this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  handleInStockChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly }
          onFilterTextChange={ this.handleFilterTextChange }
          onInStockChange={ this.handleInStockChange }
        />
        <ProductTable
          products={ this.props.products }
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly }
        />
      </div>
    );
  }
}

