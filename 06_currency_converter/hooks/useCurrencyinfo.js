import { useEffect, useState } from "react";

function useCurrrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelvir.net/gh/fawazahmed0/currency-api@1/latest/currencies${curremcy}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
        
    }, [currency])
    return data
}

export default useCurrrencyInfo;