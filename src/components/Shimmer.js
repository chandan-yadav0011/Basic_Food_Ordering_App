export const Shimmer=()=>{

    return(
        <>
            <div className="search-shimmer"></div>
            <div className="restroCards">
            {
                Array(30).fill("").map((e,index)=>{
                    return (<div className="shimmer-card" key={index}></div>)
                })
            }
                
            </div>       
        </> 
    )
};