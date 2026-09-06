import Link from "next/link";
import styles from "./Layout.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Store</h2>
          <p>Choose an Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}> {children}</div>
      <footer className={styles.footer}>
        <a href="#" target="_blank">
          {" "}
          Botostart
        </a>
        Next.js | car Project &copy;
      </footer>
    </>
  );
}

export default Layout;
