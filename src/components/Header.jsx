import React from 'react';

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-7xl font-extrabold tracking-tight text-slate-900 md:mt-8 ">
        {title}
      </p>
    </div>
  );
};

export default Header;
