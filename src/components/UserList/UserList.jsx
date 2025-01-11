import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={item.id.toString()}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
