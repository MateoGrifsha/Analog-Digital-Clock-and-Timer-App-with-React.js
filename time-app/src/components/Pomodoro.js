import { useState, useEffect } from 'react'
import Timer from './Timer';

const Pomodoro = () => {
    const [shortBreak, setShortBreak] = useState(false)
    const [longBreak, setLongBreak] = useState(false)


    return ( 
        <div>
            <div><Timer /></div>
        </div>
     );
}
 
export default Pomodoro;