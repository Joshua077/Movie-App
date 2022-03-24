import image from './heroImage.png'

export default function Hero(props) {
    

    return (
        <>
           <div style={{ backgroundImage:`url(${image})` }} className='img'>
               <h1 className='imgText'>Watch <br/>something <br/> incredible.</h1>
        </div> 
        </>
    )
}
