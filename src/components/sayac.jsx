import {useState} from 'react'
export default function(){
    const [count,setCount] = useState(10)

    function Increase(){
        setCount(count + 1)
    }
    function Decrease(){
        setCount(count - 1)
    }
    function Reset(){
        setCount(0)
    }
    
    return(
        <div className='container'>
        <p>{count}</p>
        <button onClick={Increase}>Arttır</button>
        <button onClick={Decrease}>Azalt</button>
        <button onClick={Reset}>Resetle</button>
        </div>
    )
}