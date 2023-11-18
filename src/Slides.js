import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const Slides = ({ slides }) => {
    const [index, setIndex] = useState(0)
    const prev = () => {
        setIndex(i => i - 1)
    }
    const next = () => {
        setIndex(i => i + 1)
    }
    const restart = () => {
        setIndex(0)
    }
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <Button variant='primary' onClick={restart}>Restart</Button>{' '}
                <Button variant='primary' onClick={prev} disabled={index === 0}>Previous</Button>{' '}
                <Button variant='primary' onClick={next} disabled={index === slides.length - 1}>Next</Button>
            </div>
            <center style={{ margin: "50px" }}>
                <h1>{slides[index].title}</h1>
                <h4>{slides[index].text}</h4>

            </center>
        </>
    )
}

export default Slides
