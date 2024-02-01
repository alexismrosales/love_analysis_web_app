import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CounterAnimation({limit}) {
  return (
      <VisibilitySensor partialVisibility offset={{ bottom: 150 }}>
        {({ isVisible }) => (
          <div style={{ height: 50 }}>
            {isVisible ? <CountUp end={limit} duration={6} /> : null}
          </div>
        )}
      </VisibilitySensor>
  );  
}
export default CounterAnimation;