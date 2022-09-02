import '../style/RoleList.css';

const AliveRole = ({ RoleName }) => {
  return (
    <div className="RoleListItem">
      <h3>{RoleName} </h3>
      <br></br>
    </div>
  );
};

export default AliveRole;
