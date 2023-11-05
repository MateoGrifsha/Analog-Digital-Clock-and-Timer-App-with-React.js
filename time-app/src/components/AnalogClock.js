import { useState, useEffect } from 'react'

const AnalogClock = () => {
    const [date, setDate] = useState(new Date())
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()


    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    })

    return ( 
        <div className ='analog-clock'>
            <div className="dial seconds" style={{
                transform : 'rotate(' + seconds*6 + 'deg)'
            }}></div>
            <div className="dial minutes" style = {{
                transform : 'rotate(' + minutes*6 + 'deg)'
            }}></div>
            <div className="dial hours" style={{
                transform : 'rotate(' + hours*30 + 'deg)'
            }}></div>
            <div className='center-dot'></div>
        </div>
     );
}
 
export default AnalogClock;