import './hook.css';
import { useState } from 'react';

function Hack() {
    const [count,setcount]=useState(1);
    let answer=()=>setcount(count+1);
    return (
        <>
            <h1 >`hey my button ${count}`</h1>

            <button className="My-button" onClick={answer}>`hey ${count}`</button>
            <button className="My-button " onClick={answer}>hey</button>

        </>
    )
}

export default Hack;