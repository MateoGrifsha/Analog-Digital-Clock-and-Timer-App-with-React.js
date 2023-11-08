import { useState } from 'react';
import Timer from './Timer';

const Pomodoro = () => {
    const [submitted, setSubmitted] = useState(false)
    const [time, setTime] = useState('')
    const [timeMinutes, setTimeMinutes] = useState('')
    const [timeSeconds, setTimeSeconds] = useState('')

    const handleSubmit = () => {
        setSubmitted(true)
        setTimeMinutes(parseInt(time.substring(0,2)))
        setTimeSeconds(parseInt(time.substring(3)))
    }

    return (
        <div>
            {!submitted && 
            <form onSubmit={handleSubmit} className='form-container'>
                <label>Set timer (e.g 00:05) </label>
                <input type="text" onChange={(e) => {
                    setTime(e.target.value)
                }} /> 
                <button>Submit</button>
            </form>}
            {submitted && <div><Timer id="timer" timeValue={time} timeMinutes={timeMinutes} timeSeconds={timeSeconds} />{console.log(timeMinutes, timeSeconds)}</div>}
        </div>
     );
}
 
export default Pomodoro;