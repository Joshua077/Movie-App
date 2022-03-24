import "../App.css"
export default function Input({searchValue,setSearchValue}) {
    

    return (
        <>
        <div className="input-container">
        <p className="text"> Search</p>
            <input type="text" style={{width:"100%",height:"54px",padding:"12px"}} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        </div>
             
            
           
        </>
    )
}
