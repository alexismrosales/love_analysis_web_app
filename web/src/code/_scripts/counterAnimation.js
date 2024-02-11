import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CounterAnimation({limit, time, height , marginTop, marginBottom}) {
  return (
    <CountUp end={limit} duration={time ? time : 13}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} partialVisibility offset={{ bottom: 150 }}>
        <span ref={countUpRef} style={{ height: height ? height : 50}} className={`relative items-center justify-center -mt-${marginTop ? marginTop : '0'} -mb-${marginBottom ? marginBottom : '0'}`} />
      </VisibilitySensor>
    )}
  </CountUp>
  );  
}
export default CounterAnimation;