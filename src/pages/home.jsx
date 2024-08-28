import React, { useState } from 'react'

const home = () => {

    const [count, setCount] = useState(0);

  return (
    <>
        <div className="container vh-100 d-flex justify-content-center align-items-center flex-column gap-3">
            <h1>VITE STARTER</h1>
            <h5>COUNT: {count}</h5>
            <div className="d-flex flex-row gap-3">
                <button className='btn btn-success' onClick={() => setCount(count + 1)}>Increment</button>
                <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
            <button className='btn btn-primary' onClick={() => setCount(0)}>Reset</button>
        </div>
    </>
  )
}

export default home