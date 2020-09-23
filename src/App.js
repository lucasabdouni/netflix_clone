import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from './components/MovieRow/index';
import FeaturedMovie from './components/FeaturedMovie/index';
import Header from './components/Header/index'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

useEffect(() =>{
  const loadAll = async () => {
    // Pegando a lista Total
    let list = await Tmdb.getHomeList();
    setMovieList(list);

  //Pegando o Featured
  let originals = list.filter(i=>i.slug === 'originals');
  let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
  let chosen = originals[0].items.results[randomChosen];
  let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
  console.log(chosenInfo);
  setFeaturedData(chosenInfo);
}

  loadAll();
}, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener)
     
    }
  }, []);

return (
  <div className="page">

  <Header black={blackHeader}/>

  {featuredData &&
    <FeaturedMovie item={featuredData} />
  }

    <section className="lists">
      {movieList.map((item, key) =>(
        <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
      ))
      
      }
    </section>

    <footer>
      Lucas Abdouni<br/>
      Direitos de imagem para Netflix <br/>
      Dados pegos do site Themoviedb.org
    </footer>

    {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://notresponding.net/wp-content/uploads/2018/01/Netflix_LoadTime.gif" alt="Carregando..." />
      </div>
    }
     </div>
)
}