import React, { useState } from 'react';

const DetailsComponent = ({description}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    description ? 
    <>
      <i className='text-2xl pink-text block cursor-pointer' onClick={toggleDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </i>
      {showDetails && (
        <div className="text-lg">
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
