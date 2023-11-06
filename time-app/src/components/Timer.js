import { useState, useEffect, useRef } from "react"


const Timer = () => {
    const Ref = useRef(null)
    const [timer, setTimer] = useState('00:00')

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
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('01:10');
 
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 70);
        return deadline;
    }

    return(
        <div>
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}

export default Timer