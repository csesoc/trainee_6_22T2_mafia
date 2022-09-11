import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Role from './Role';
import '../style/roles.css';
import '../style/helpTip.css';
import '../style/errors.css';
import { GameContext } from '../GameContext';

const ChooseRole = () => {
  const { roles, setRoles, players, setNumMafia, setNumTownspeople } =
    useContext(GameContext);

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
        ? setNumMafia((numMafia) => numMafia + change)
        : setNumTownspeople((numTownspeople) => numTownspeople + change);
      newRoles[getRoleIndex(roleId)].count += change;
      setRoleError(roleId, false);
    }
    setRoles(newRoles);
  };

  const resetRoleErrors = () =>
    roles.reduce((prev, next) => ({ ...prev, [next.roleId]: false }), {});

  const [roleErrors, setRoleErrors] = useState(resetRoleErrors());

  const setRoleError = (roleId, val) => {
    const newRoleErrors = resetRoleErrors();
    newRoleErrors[roleId] = val;
    setRoleErrors(newRoleErrors);
  };

  useEffect(() => {
    // function to automatically assign role numbers upon clicking `Select Roles`
    // To be updated when `Add Player` is implemented
    const numPlayers = players.length;
    const numMafia = Math.floor(numPlayers / 3);
    const numDoctors = Math.floor((numPlayers - numMafia) / 2);
    const numBaristas = numPlayers - numMafia - numDoctors;
    for (const role of roles) {
      if (role.name === 'Mafia') {
        addRole(role.roleId, numMafia - role.count);
      } else if (role.name === 'Doctor') {
        addRole(role.roleId, numDoctors - role.count);
      } else if (role.name === 'Barista') {
        addRole(role.roleId, numBaristas - role.count);
      }
    }
  }, []);

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
