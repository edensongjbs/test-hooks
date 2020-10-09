import React, {useState} from 'react'

const ColorBackground = (props) => {
    const [color, setColor] = useState('#000')

    const changeColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        console.log(randomColor)
        setColor(`#${randomColor}`)
    }

    return (
        <div style={{backgroundColor:color, height:'100vh'}}>
            <button onClick={changeColor}>Click Me!</button>
        </div>
    )
}

export default ColorBackground