import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        quote_comp_data: state.quote_comp_data,
    };
};
 
// export default App and connect to redux store;
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default connect(mapStateToProps)(App);