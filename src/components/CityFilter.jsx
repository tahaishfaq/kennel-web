import React from 'react';

const cities = [
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

const CityFilter = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-normal mb-4">Find puppies by city</h1>
      <div className="grid grid-cols-6 gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className=""
          >
            {city.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityFilter;