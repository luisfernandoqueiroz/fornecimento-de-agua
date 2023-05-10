import { Outlet } from 'react-router-dom'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Aside } from '../../components/Aside';

import styles from "./styles.module.scss";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Aside />
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
  }