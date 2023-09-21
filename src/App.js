import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
    const [xAxis, setxAxis] = useState(0);
    const [yAxis, setyAxis] = useState(0);

    return (

        <div className = 'main_container'>
        <button className = 'horizontal'
        onClick = {
            () => setyAxis(yAxis - 50)
        }
        disabled = {
            yAxis === 0
        }>Up</button>
        <div className = 'container'>
        <button className = 'vertical'
        onClick = {
            () => setxAxis(xAxis - 50)
        }
        disabled = {
            xAxis === 0
        }>Left</button>
        <div className = 'main'>
        
        <div className = 'box'
        style = {
            {
                left: xAxis,
                top: yAxis
            }
        } > </div> 
        </div>
        <button className = 'vertical'
        onClick = {
            () => setxAxis(xAxis + 50)
        }
        disabled = {
            xAxis === 450
        }> Right </button>
        </div> 

       <button className = 'horizontal'
        onClick = {
            () => setyAxis(yAxis + 50)
        }
        disabled = {
            yAxis === 450
        }> Bottom </button> 
        </div>
    );
}

export default App;