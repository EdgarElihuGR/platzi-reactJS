import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import Count from '../components/Count';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  const [myList, setMyList] = useState(initialState.myList);

  const handleClick = (id) => {
    console.log(`ID de item: ${id}`);
  }

  return (
    <div className="App">
        <Header/>
        <Search/>

      {initialState.myList?.length > 0 &&
        <Categories title="Mi lista">
            <Carousel>
              {initialState.myList.map(item => 
                <CarouselItem key={item.id} {...item}/>  
              )}
            </Carousel>
        </Categories>
      }

        <Categories title="Tendencias">
            <Carousel>
                {initialState.trends?.map(item => 
                  <CarouselItem key={item.id} onClick={handleClick} {...item} />
                )}
            </Carousel>
        </Categories>

        <Categories title="Originales Platzi Video">
            <Carousel>
              {initialState.originals?.map(item => 
                <CarouselItem key={item.id} onClick={handleClick} {...item}/>
              )}
            </Carousel>
        </Categories>

        <Footer/>
    </div>
  
  )
}

export default App;