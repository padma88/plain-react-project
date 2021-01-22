import React, {Component} from 'react';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import './hoc/Layout/Layout.css';

class App extends Component{
  render() {
    return (
      <div className='Layout'>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    )
  }
}
export default App;
