import React from 'react';
import cv from "../cv.pdf"

const ShowCv = () => {
  return (
    <div className='mt-20 mb-10'>
      <object data={require("../cv.pdf")} type="application/pdf" width="100%" height="1000px"></object>
    </div>
  );
};

export default ShowCv;