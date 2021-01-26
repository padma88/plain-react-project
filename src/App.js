import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import { Route } from 'react-router-dom';
import './hoc/Layout/Layout.css';

class App extends Component{
  render() {
    return (
      <div className='Layout'>
        <Layout>
          <Route path='/checkout'  component={Checkout}/>
          <Route path='/' exact component={BurgerBuilder}/>
        </Layout>
      </div>
    )
  }
}
export default App;
