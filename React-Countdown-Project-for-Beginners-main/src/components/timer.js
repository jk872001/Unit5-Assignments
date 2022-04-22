import React , { Component } from 'react';
import styles from './mystyle.module.css';


class Timer extends Component {

    state = {
        minutes: 2,
        seconds: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {

            const { minutes, seconds } = this.state;
            if(seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds -1
                }))
            }
            if(seconds === 0) {
                if(minutes === 0) {
                    clearInterval(this.myInterval)
                }
                else{
                    this.setState(({minutes}) => ({
                        minutes: minutes -1,
                        seconds: 59
                    }))
                }
            }
            
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        
        const { minutes, seconds } = this.state;

        return(
            <div className={styles.component}>
                {
                    minutes === 0 && seconds === 0 ? <p className={styles.text}> Times up</p> :
                    <p className={styles.text}>Time Remaining: {minutes}: {seconds < 10 ? `0${seconds}` : seconds}  </p>
            
                }
            </div>
                
        )
    }
}

export default Timer;