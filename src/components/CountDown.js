import React, { Component } from 'react'
import moment,{ duration } from 'moment';
export default class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
        }
    }

    setCountdown = () => {
        console.log("moment()",moment());
        
        const futureDate = moment("Mar 23 2021 00:12:32")

        const today = moment();

        const clockDuration = duration(futureDate.diff(today)); 

        const days = Math.floor(clockDuration.asDays());
        const hours = clockDuration.hours();
        const mins = clockDuration.minutes();
        const secs = clockDuration.seconds();

        this.setState({
            days,
            hours,
            mins,
            secs
        })
    }

    componentDidMount(){
        this.setCountdown();

        this.interval = setInterval(() => {
           this.setCountdown(); 
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div className="countdown"> 
                {
                    Object.keys(this.state).map((key, i) => {
                        return (
                        <div className="countdown-segment">
                            <span className="countdown-segment-number">
                                {this.state[key]}
                            </span>
                            <span className="countdown-segment-caption">
                                {key.toUpperCase()}
                            </span>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
