import React from 'react';

const states = [
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
  { name: 'Lorem ipsum dolor sit.' },
];

const StateFilter = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-normal mb-4">Find puppies by states</h1>
      <div className="grid grid-cols-6 gap-4">
        {states.map((states, index) => (
          <div
            key={index}
            className=""
          >
            {states.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateFilter;