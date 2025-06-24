import styles from "../styles/dashboard.module.css";

function dashboard() {
	return (
		<>
			<div className={styles.dashboard}>

				<div className={styles.card}>
					<h3>CPU Temperature</h3>
					<p className={styles.statValue}>0%</p>
				</div>
				<div className={styles.card}>
					<h3>Memory Usage</h3>
					<p className={styles.statValue}>0%</p>
				</div>
				<div className={styles.card}>
					<h3>Disk Usage</h3>
					<p className={styles.statValue}>0%</p>
				</div>
				<div className={styles.card}>
					<h3>Network Status</h3>
					<p className={styles.statValue}>Offline</p>
				</div>
			</div>
		</>
	);
}

export default dashboard;
