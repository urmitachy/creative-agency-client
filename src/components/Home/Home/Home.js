import React from 'react';
import Carousel from '../Carousel/Carousel';
import Client from '../Client/Client';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logos from '../Logos/Logos';
import Subject from '../Subject/Subject';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logos></Logos>
            <Subject></Subject>
            <Carousel></Carousel>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;
