import { useState, useEffect, useRef } from "react"


const Timer = ({timeValue, timeMinutes, timeSeconds}) => {
    const Ref = useRef(null)
    const [timer, setTimer] = useState(timeValue)

    const timeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date())
        const seconds = Math.floor((total/1000) % 60)
        const minutes = Math.floor((total/1000/60) % 60)
        return {total, seconds, minutes}
    }
    const startTimer = (e) => {
        let { total, minutes, seconds } = timeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
     
    const clearTimer = (e) => {

        setTimer(timeValue);
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const onClickStart = () => {
        clearTimer(getDeadTime());
    }
    const getDeadTime = () => {
        let deadline = new Date();
        let totalTimeSeconds = timeSeconds + (timeMinutes * 60)
        deadline.setSeconds(deadline.getSeconds() + totalTimeSeconds);
        return deadline;
    }

    return(
        <div>
            <div className="timeHolder">
              <h2>{timer}</h2>  
            </div>
              <button onClick={onClickStart} className="startButton">START</button>
        </div>
    )
}

export default Timer