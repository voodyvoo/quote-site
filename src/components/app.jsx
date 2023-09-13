import React, { Component } from 'react';
import Quotes from './quotes';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <div id='app-wrapper' style={{ height: '100%' , weight:"100%"}}>
                <Quotes></Quotes>
                {/*<p>{this.props.quote_comp_data}</p>*/}
                </div>
            </React.Fragment>
        ;
    }
}
