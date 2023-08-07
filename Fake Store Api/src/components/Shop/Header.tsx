import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();

  return (
    <div className="header">
      <h1>
        <Link to={"/"}>Home / {id}</Link>
      </h1>
    </div>
  );
};

export default Header;
