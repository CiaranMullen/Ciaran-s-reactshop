import React    from 'react';
import ViewCart from './ViewCart';
import Stripe       from './Stripe';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Product Shop</h1>
        <p>Food shop</p>
        <div className='moveRight'></div>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;