import React from 'react';
import { counterData } from '../data';

class PreviousCounters extends React.Component {
    render() {
      return (
                <div id="counterdata">
                    {counterData.map((data,key)=>{
                        return(
                            <div class="previousCounterBox" key={key}>
                                <p class="dateText">Date: {data.date}</p> 
                                <p class="overThereText">Over there: {data.count}</p> 
                                <p classs="hoursText">Hours: {data.hours}</p>
                                
                            </div>
                        )
                    })}

                </div>

      );
    }
}

export default PreviousCounters;