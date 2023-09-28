


const Shimmer=()=>
{
    return (
        <div data-testid="shimmer" className="flex flex-wrap">
        {Array(10).fill("").map((e,index)=> <div key={index} className=" h-72 w-56 bg-gray-300 m-10">
    
    </div> )}
    </div>)
}


export default Shimmer