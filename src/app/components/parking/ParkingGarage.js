import React from 'react';

const ParkingGarage = ({parking}) => {
  const getClassNameForCapacity = (available, total) => {
    let className = 'capacity';
    const percentage = Math.round(available / total * 100);
    if (percentage >= 60) {
      className += ' capacity--ok';
    } else if (percentage >= 20 && percentage < 60) {
      className += ' capacity--warning';
    } else if (percentage < 20) {
      className += ' capacity--danger';
    }
    return className;
  };

  return (
    <li className="parking-list__item">
      <h1 className="name">{parking.fields.name} (max. {parking.fields.totalcapacity})</h1>
      <span className={getClassNameForCapacity(parking.fields.availablecapacity, parking.fields.totalcapacity)}>{parking.fields.availablecapacity}</span>
    </li>
  );
};

export default ParkingGarage;