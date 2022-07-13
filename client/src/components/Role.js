
const Role = ({ index, role, addRole, errors }) => {
  return (
      <div className='role'>
          <h3>
            {role.name}: {role.count}
            <div className='change-val'>
              <button onClick={() => addRole(index, 1,)} > + </button>
              <button onClick={() => addRole(index, -1,)} > - </button>
            </div>
          </h3>
          <p>{role.help}</p>
          <p>{errors[index] && `Cannot have less than 0 ${role.name}s!`}</p>
      </div>
  );
};

export default Role;