import React from 'react';
import AguaIcon from '../assets/AguaIcon';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen animate-pulse">
      <AguaIcon gColor="#000" color="#000" width="50rem" />
    </div>
  );
};

export default Loader;
