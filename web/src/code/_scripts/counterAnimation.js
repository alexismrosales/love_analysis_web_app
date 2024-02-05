import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CounterAnimation({limit, time, height , marginTop, marginBottom}) {
  return (
      <VisibilitySensor partialVisibility offset={{ bottom: 150 }}>
        {({ isVisible }) => (
          <div style={{ height: height ? height : 50}} className={`relative items-center justify-center -mt-${marginTop ? marginTop : '0'} -mb-${marginBottom ? marginBottom : '0'}`}>
            {isVisible ? <CountUp end={limit} duration={time ? time : 20} /> : null}
          </div>
        )}
      </VisibilitySensor>
  );  
}
export default CounterAnimation;