import React from 'react';

const PR = ({parking}) => {
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
      <h1 className="name">{parking.fields.parkingname} (max. {parking.fields.parkingnumberofspaces})</h1>
      <span className={getClassNameForCapacity(parking.fields.parkingnumberofvacantspaces, parking.fields.parkingnumberofspaces)}>{parking.fields.parkingnumberofvacantspaces}</span>
    </li>
  );
};

export default PR;