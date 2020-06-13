import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MenuHeader from './MenuHeader';
import CardProfile from './CardProfile';
import PhotoColumns from './PhotoColumns';
import Footer from './Footer';
import ButtonComponent from './ButtonComponent';
import ImageContainer from './ImageContainer';
import TextCenter from './TextCenter';

class App extends Component {
    render() {
        return (
        <div>
            <MenuHeader />
            <ImageContainer />
            <TextCenter />
            <CardProfile />
            <ButtonComponent />
            <PhotoColumns />
            <Footer />
        </div>
        )
    }  
}

ReactDom.render(<App />, document.querySelector('#root'));