import React, { Component } from 'react'
import { useState } from 'react'

const State  = ()=>{

    const [Count, setCount] = useState('0');

    return (
       
        <h1>Count: {Count}</h1>
       
    )
}