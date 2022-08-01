import React, { useContext } from 'react';
import { useState } from 'react';
import Role from './Role';
import '../style/roles.css';
import '../style/helpTip.css';
import '../style/errors.css';
import { GameContext } from '../GameContext';

const ChooseRole = () => {
  const {
    roles,
    setRoles,
    numMafia,
    setNumMafia,
    numTownspeople,
    setNumTownspeople,
  } = useContext(GameContext);

  const getRoleIndex = (roleId) => {
    return roles.map((role) => role.roleId).indexOf(roleId);
  };

  const roleIsMafia = (roleId) => {
    return roles[getRoleIndex(roleId)].isEvil;
  };

  const addRole = (roleId, change) => {
    const newRoles = [...roles];
    if (newRoles[getRoleIndex(roleId)].count + change < 0) {
      setRoleError(roleId, true);
    } else {
      roleIsMafia(roleId)
        ? setNumMafia(numMafia + change)
        : setNumTownspeople(numTownspeople + change);
      newRoles[getRoleIndex(roleId)].count += change;
      setRoleError(roleId, false);
    }
    setRoles(newRoles);
  };

  const resetRoleErrors = () => {
    return roles.reduce(
      (prev, next) => ({ ...prev, [next.roleId]: false }),
      {}
    );
  };

  const [roleErrors, setRoleErrors] = useState(resetRoleErrors());

  const setRoleError = (roleId, val) => {
    const newRoleErrors = resetRoleErrors();
    newRoleErrors[roleId] = val;
    setRoleErrors(newRoleErrors);
  };

  return (
    <div className="roles">
      {roles.map((role) => (
        <Role
          key={role.roleId}
          role={role}
          addRole={addRole}
          roleErrors={roleErrors}
        />
      ))}
    </div>
  );
};

export default ChooseRole;
