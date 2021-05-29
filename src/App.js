import React, {Component} from 'react'
import {
    Hearder
} from './components/hearder'
import 
    Section1
 from './components/section1'
import {
    Section2
} from './components/section2'
import 
    Section3
 from './components/section3'
import {
    Section4
} from './components/section4'
import {
    Section5
} from './components/section5'
import {
    Section6
} from './components/section6'
import {
    Section7
} from './components/section7'
import {
    Section8
} from './components/section8'

import {
    Footer
} from './components/footer'
class App extends Component {
    
    render() {
        return (
            <body>
                < Hearder />
                <Section1/>
                <Section2/>
                <Section3/>
                < Section4 />
                < Section5 />
                < Section6 />
                < Section7 />
                < Section8 />
                < Footer />
            </body>
            
        )
    }
 
}

export default App;