import React from 'react';
import { useState } from 'react';
import Role from './Role';
import '../style/roles.css';
import '../style/helpTip.css';
import '../style/errors.css';

const ChooseRole = () => {
  // Front end:
  // In future use roles = getRoles.map(...), pass it down through App.js?
  const [roles, setRoles] = useState([
    {
      name: 'Mafia',
      help: 'Selects a player to kill every night',
      count: 0,
    },
    {
      name: 'Doctor',
      help: 'Selects a player to save every night',
      count: 0,
    },
    {
      name: 'Barista',
      help: 'Makes coffee',
      count: 0,
    },
  ]);

  const addRole = (index, change) => {
    const newRoles = [...roles];
    if (newRoles[index].count + change < 0) {
      setError(index, true);
    } else {
      newRoles[index].count += change;
      setError(index, false);
    }
    setRoles(newRoles);
  };

  const [errorMsgs, setErrorMsgs] = useState(
    [...Array(roles.length)].fill(false)
  );

  const setError = (index, val) => {
    const newErrorMsgs = [...Array(roles.length).fill(false)];
    newErrorMsgs[index] = val;
    setErrorMsgs(newErrorMsgs);
  };

  return (
    <div className="roles">
      {roles.map((role, index) => (
        <Role
          key={index}
          index={index}
          role={role}
          addRole={addRole}
          errors={errorMsgs}
        />
      ))}
    </div>
  );
};

export default ChooseRole;
