import { Outlet } from 'react-router-dom'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

export function DefaultLayout() {
    return (
        <div className={styles.principalContent}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
  }