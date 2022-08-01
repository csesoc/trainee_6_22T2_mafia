const Role = ({ role, addRole, roleErrors }) => {
  return (
    <div className="role">
      <h3>
        {role.name}: {role.count}
        <div className="change-val">
          <button
            style={{ 'font-size': '11px' }}
            onClick={() => addRole(role.roleId, -role.count)}
          >
            Reset
          </button>
          <br></br>
          <button onClick={() => addRole(role.roleId, -1)}>-</button>
          <button onClick={() => addRole(role.roleId, 1)}>+</button>
        </div>
      </h3>
      <p>{role.help}</p>
      <p>
        {roleErrors[role.roleId] && `Cannot have less than 0 ${role.name}s!`}
      </p>
      {/* Deliberately making the rookie error that adding an 's' onto a noun
      turns it plural, please don't add roles that have weird plurals */}
    </div>
  );
};

export default Role;
