import '../App.css'
export default function Movelist(props) {
    

    return (
        <div>
        < div className="input-container1">
        <p>  &#123;$Movie Category Name &#125;</p>
           <div className="row">
             <div className="scrolling-wrapper">

             {props.movies.map((movies,index)=>(
             
             <img src={movies.Poster} alt="movie" style={{marginRight:"12px"}} class="card"></img>
                        
                        
                     ))}
                    
                   
             </div>
       
         </div> 
        </div>
        
          </div>
              )
}
