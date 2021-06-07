import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import content from './components/content/content'
import 
    Section1
 from './components/section1'
class App extends Component {
    
    
    render() {
        return (
         <div>
            <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Section1} />
            <Route exact path="/product/:productId" component={content}></Route>
            </Switch>
            </BrowserRouter>
              </div>
            
        )
    }
 
}

export default App;


