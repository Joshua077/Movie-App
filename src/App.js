import {useState,useEffect} from 'react'
import Navbar from './Component/Navbar';
import './App.css';
import Hero from './Component/Hero/Hero';
import Input from './Component/Input';
import Movelist from './Component/Movelist';
function App() {
  const [searchValue,setSearchValue] = useState("avenger")
  const [movieList, setMovielist] = useState([])
  const getMovie = async(searchValue) =>{
    const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=8e3ac4ba` 
    const response = await fetch(url)
    const responsJson = await response.json()
    console.log(responsJson.Search)
    if(responsJson.Search){
      setMovielist(responsJson.Search)
    }
    
  }
  useEffect(()=>{
    getMovie(searchValue)
  },[searchValue])
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
     <Movelist movies={movieList}/>
    </div>
  );
}

export default App;
