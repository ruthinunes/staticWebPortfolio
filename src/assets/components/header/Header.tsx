import { MdOutlineEmail } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/Ri";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <a href="#" className={styles.logoCtn}>
          <RiUserSmileLine className={styles.logoIcon} />
          <span>You</span>
          <span>X</span>
        </a>

        <button className={styles.menuIcon} onClick={toggleMenu}>
          {isActive ? <AiFillCloseCircle color="white"/> : <AiOutlineMenu />}
        </button>
        <div
          className={
            isActive
              ? styles.menuOverlay
              : [styles.menuOverlay, styles.hide].join(" ")
          }
        ></div>

        <nav
          className={
            isActive
              ? styles.headerList
              : [styles.headerList, styles.hide].join(" ")
          }
        >
          <ul className={styles.list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              Cart (3)
              <ul>
                {/* <li>one</li>
                <li>Two</li>
                <li>Three</li> */}
              </ul>
            </li>
          </ul>
        </nav>
        <div
          className={
            isActive
              ? styles.headerEmail
              : [styles.headerEmail, styles.hide].join(" ")
          }
        >
          <MdOutlineEmail size={25} />
          <a href="#" className="email-link">
            john@you.com
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
