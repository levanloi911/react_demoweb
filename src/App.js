import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {
    Hearder
} from './components/hearder'
import 
    Section1
 from './components/section1'
class App extends Component {
    
    
    render() {
        return (
         <div>
            {/* <BrowserRouter>
            <Switch> */}
                {/* <a href={`/product/${link.id}`}>
                <h4>Name category: {link.name} </h4>
                </a> */}
            {/* <Route exact path="/" component={Category} />
            <Route exact path="/product/:productId" component={Blogs}></Route>
            </Switch>
            </BrowserRouter> */}
                < Hearder />        
                <Section1/>
              </div>
            
        )
    }
 
}

export default App;


