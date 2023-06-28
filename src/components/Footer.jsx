import React from 'react';

export default function Footer () {
  return (
    <footer className="mt-10 py-14 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="mb-2"><i className=" mr-2"></i>Github: <a target="_blank"  rel="noreferrer" href="https://github.com/elRomanoff">https://github.com/elRomanoff</a></p>
          <p className="mb-2"><i className=" mr-2"></i>LinkedIn: <a href="https://www.linkedin.com/in/facundo-romano-jsdev/" target="_blank"  rel="noreferrer">https://www.linkedin.com/in/facundo-romano-jsdev/</a> </p>
          <p className="mb-2"><i className=" mr-2"></i>Email: facundo.romano121@gmail.com</p>
          <p className="mb-2"><i className=" mr-2"></i>Phone number: +5493454122840</p>
        </div>
      </div>
    </footer>
  );
};