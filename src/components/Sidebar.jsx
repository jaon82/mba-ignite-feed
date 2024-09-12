import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.istockphoto.com/id/1450969748/pt/foto/developer-working-with-new-program.jpg?s=1024x1024&w=is&k=20&c=j8YWSzq5z15S548P_77LcfNd2AcBDr1dfX5tvKkvGrI="
        alt=""
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/jaon82.png"
          alt=""
        />
        <strong>Jean Nunes</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
