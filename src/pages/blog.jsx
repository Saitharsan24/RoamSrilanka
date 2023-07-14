import React, { Component } from 'react';
import Footer from '../components/footer';
import "bootstrap/dist/css/bootstrap.css";

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Hello World</h1>
                <Footer/>
            </div>
         );
    }
}
 
export default Blog;