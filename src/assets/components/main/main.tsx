import { MdOutlineEmail } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/Ri";
import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <main className={styles.mainCtn}>
        <div>
          <p>Hello, we are You X</p>
          <h1>We enjoy designing tech websites and digital products</h1>
          <button>Get in touch</button>
        </div>

        <div>
            <img src="src/assets/images/heroImg.png" className={styles.img} />
        </div>
      </main>
    </>
  );
};

export default Main;
