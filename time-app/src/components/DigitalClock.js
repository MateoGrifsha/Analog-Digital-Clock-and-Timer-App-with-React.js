import { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [date, setDate] = useState(new Date())
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    let formatTime = (value) => {
        if(value < 10){
            value = '0' + value;
        }
        return value
    }

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }) 
    
    return ( 
        <div className="digital-clock">
            <div className="digital-time">{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</div>
        </div>

     );
}
 
export default DigitalClock;