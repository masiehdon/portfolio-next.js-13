import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer} style={{ zIndex: 1 }}>
      <h2 className={styles.header}>Thats Me</h2>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className="li">
            <Link className="link" href="/" style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: 16,
              padding: 10,
            }}>
            <h4 className="p">Home</h4> 
            </Link>
          </li>
          <li className="li">
            <Link href="/about"
            style={{
              textDecoration:'none',
              color: 'white',
              fontSize: 16,
              padding: 10,
            }}>
          <h4 className="p">About</h4>
              
             </Link>
          </li>
          <li className="li">
            <Link  href="/projects" style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: 16,
              padding: 10,
            }}>
             <h4 className="p">Projects</h4> 
             </Link>
          </li>
          <li className="li">
            <Link  href="/contact" style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: 16,
              padding: 10,
            }}>
             <h4 className="p">Contact</h4> 
             </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
