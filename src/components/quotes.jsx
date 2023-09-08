import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update_app_comp_action } from './actions/actions';

class Quotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            jsonData: {},
            quote: "",
            author: "",
            randomColor: "white"
        };

        this.buttonSmash = this.buttonSmash.bind(this)
    }

    getRandomColor() {
        // Generiere zufällige Werte für Rot, Grün und Blau (RGB)
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        // Konvertiere RGB-Werte in einen HEX-String
        const hexColor = `rgb(${red}, ${green}, ${blue})`;
    
        // Gib den HEX-Farbwert zurück
        return hexColor;
      }

    changeColor() {
        const newColor = this.getRandomColor();
        this.setState({ randomColor: newColor });
      }

    componentDidMount(){
           // Die URL, von der Sie die JSON-Daten abrufen möchten
           const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
      
           // Daten abrufen
           fetch(url)
             .then(response => response.json())
             .then(jsonData => {
               this.setState({jsonData});
               this.buttonSmash();
             })
             .catch(error => {
               console.error('Fehler beim Abrufen der Daten:', error);
             });   
    }

    buttonSmash(){
        const { quotes } = this.state.jsonData;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex].quote;
        const randomAuthor = quotes[randomIndex].author;
        
        this.changeColor(); 
        this.setState({ quote: randomQuote, author: randomAuthor },
            () => {
                this.props.update_app_comp_action(this.state.randomColor);
                document.body.style.backgroundColor = this.state.randomColor;
            });
    }
    

    render() { 
        return (
            <div id="quote-box" className='quote-box' style={{ color: this.state.randomColor }}>
                <p id="text" ><span>" </span>{this.state.quote}</p>
                <p id="author" style={{ textAlign: "right"}}>- {this.state.author}</p>
                <div class ="buttons" id="buttons">
                    <a class="twitter-share-button" id="tweet-quote" title="Tweet this quote!" target="_top" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)}>
                        <img id="twitter-icon" src="https://abs.twimg.com/responsive-web/web/icon-ios.8ea219d4.png" alt="Twitter Logo" className="twitter-icon"/>
                    </a>          
                <button onClick={this.buttonSmash} id="new-quote">New quote</button>
                </div>
            </div>   
        );
    }
}
 
// export default Quotes and connect to redux store;
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default connect(null, { update_app_comp_action })(Quotes);