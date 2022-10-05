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
    if (roles.reduce((prev, next) => prev + next.count, 0) === 0) {
      // function to automatically assign role numbers upon clicking `Select Roles`
      // To be updated when `Add Player` is implemented
      // By putting AddPlayer and ChooseRole side by side ?
      // This allows the dependency array to be set as [players],
      // and will be automatically updated every time a player is added/removed
      const numPlayers = players.length;
      const numMafia = Math.floor(numPlayers / 3);
      const numDoctors = Math.floor((numPlayers - numMafia) / 2);
      const numDetectives = numPlayers - numMafia - numDoctors > 1 ? 1 : 0;
      const numBaristas = numPlayers - numMafia - numDoctors - numDetectives;
      for (const role of roles) {
        if (role.name === 'Mafia') {
          addRole(role.roleId, numMafia - role.count);
        } else if (role.name === 'Doctor') {
          addRole(role.roleId, numDoctors - role.count);
        } else if (role.name === 'Detective') {
          addRole(role.roleId, numDetectives - role.count);
        } else if (role.name === 'Barista') {
          addRole(role.roleId, numBaristas - role.count);
        }
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
