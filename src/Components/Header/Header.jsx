import "../../index.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function HeaderComponent() {
  return (
    <header className="flexContainer">
      <img
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
        alt="logo"
      />
      <input placeholder="Search Anything!!" />
      <div className="spanContainer">
        <span>
          Mumbai
          <FaLocationDot />
        </span>
        <span>
          <FaUser />
        </span>
      </div>
    </header>
  );
}
export default HeaderComponent;
