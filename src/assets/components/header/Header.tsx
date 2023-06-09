import { MdOutlineEmail } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/Ri";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <a href="#" className={styles.logoCtn}>
          <RiUserSmileLine size={35} />
          <span>You</span>
          <span>X</span>
        </a>

        <div className={styles.headerList}>
          <ul className={styles.list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pages</a></li>
            <li>
              Cart
              <ul>
                {/* <li>one</li>
                <li>Two</li>
                <li>Three</li> */}
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.headerEmail}>
          <MdOutlineEmail size={30} />
          <a href="#" className="email-link">
            john@you.com
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
