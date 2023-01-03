import React, { Component } from 'react';

class MainPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          preloaded: false,
        };
      }


    componentDidMount() {
        function displayMainPage() {
      // use the replace function to display the preloaded page
      window.location.replace('/');
    }
  
    setTimeout(displayMainPage, 5000);

    }

    render() {
        if (!this.state.preloaded) {
          // display the preloaded page
          return (
            <div>
              <img src="/bluefinmaldivesnas1.jpg" alt="A beautiful image of a blue fin in the Maldives" />
            </div>
          );
        } else {
          // display the main page
          return (
            <div>
              <a href="/"></a>
            </div>
      );
    }
  }
}
  
 


  export default MainPage;

        