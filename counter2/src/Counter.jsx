import React from 'react'


const Counter = () => {


    let counterNumber = 0;

    function increacecounter() {
        counterNumber++;
        document.getElementById('numvalue').innerText = counterNumber;
    }

    function decreacecounter() {
        if (counterNumber > 0) {
            counterNumber--;
            document.getElementById('numvalue').innerText = counterNumber;
        }
    }


    return (
        <>
            
            <div className='container'>
                <div className='counter-container'>
                <h1 id='numvalue'>0</h1>
                <div className='buttons'>
                    <button id='increment' onClick={increacecounter}>+</button>
                    <button id='decrement' onClick={decreacecounter}>-</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Counter

