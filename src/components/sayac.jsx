import {useState} from 'react'

export default function Sayac({increase,decrease,reset,count}){
    
    return(
        <div className='container'>
        <p>{count}</p>
        <button onClick={increase}>Arttır</button>
        <button onClick={decrease}>Azalt</button>
        <button onClick={reset}>Resetle</button>
        </div>
    )
}