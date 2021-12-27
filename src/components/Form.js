import React from 'react'

export default function Form({setText, setAmount}) {

    let onSubmit = (e) => {
        e.preventDefault()
        // setText(e.target.text.value)
        // e.target.text.value =""
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="text" onChange={(e) => setText(e.target.value)}  placeholder='Search For Your Images'/>
            <input type="number" name="amount" onChange={(e) => setAmount(e.target.value)}  placeholder='Number of Your Images'/>
            <button type='submit'>Search</button>
        </form>
    )
}