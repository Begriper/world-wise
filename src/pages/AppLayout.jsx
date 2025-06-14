import User from "../components/User";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>
    );
}

export default AppLayout;
