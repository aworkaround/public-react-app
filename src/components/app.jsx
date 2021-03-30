import React, { Component } from 'react';
// Importing CSS //
import '../css/main.css';
import '../css/custom.css';
// Importing components //
import Header from './header';
import Search from './side-bar/search';
import Menu from './side-bar/menu';
import Blogs from './side-bar/blogs';
import Contact from './side-bar/contact';
import Footer from './side-bar/footer';
import Portfolio from './content/portfolio/portfolio';
import initFunction from '../js/main';

class App extends Component {
    
    componentDidMount = () => {
        initFunction();
    }

    render() { 
        return (
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <Header />
                        <Portfolio />
                    </div>
                </div>
                <div id="sidebar">
                    <div className="inner">
                        <Search />
                        <Menu />
                        <Blogs />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}


export default App;