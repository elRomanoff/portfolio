import React from 'react';

export default function Footer () {
  return (
    <footer className="mt-10 py-14 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <p className="mb-2"><i className=" mr-2"></i>Dirección: Calle Principal, Ciudad, País</p>
          <p className="mb-2"><i className=" mr-2"></i>Email: info@example.com</p>
          <p className="mb-2"><i className=" mr-2"></i>Teléfono: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};