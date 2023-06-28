import React, { useState } from 'react';

const DetailsComponent = ({description}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    description ? 
    <>
      <i className='text-3xl pink-text block cursor-pointer drop-shadow-[0_1.2px_1.2px_rgb(255,255,255)]' onClick={toggleDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </i>
      {showDetails && (
        <div className="text-2xl my-5">
          {description}
        </div>
      )}
    </>
    : 
    <>
    </>
  );
};

export default DetailsComponent;
