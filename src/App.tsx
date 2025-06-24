import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import horNav from "./components/hor-nav.tsx";
import footer from "./components/footer.tsx";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import About from "./pages/about.tsx";
import Install from "./pages/install.tsx";
import Signup from "./pages/signup.tsx";
import Dashboard from "./pages/dashboard.tsx";

import CpuPage from "./pages/dashboard-pages/cpu-page.tsx"
import RamPage from "./pages/dashboard-pages/ram-page.tsx"
import DiskPage from "./pages/dashboard-pages/disk-page.tsx"
import NetworkPage from "./pages/dashboard-pages/network-page.tsx"

function App() {
	return (
		<Router>
			<>
				{horNav()}
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/install" element={<Install />} />
						<Route path="/about" element={<About />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/dashboard" element={<Dashboard />} />

						<Route path="/dashboard/cpu" element={<CpuPage />} />
						<Route path="/dashboard/ram" element={<RamPage />} />
						<Route path="/dashboard/disk" element={<DiskPage />} />
						<Route path="/dashboard/network" element={<NetworkPage />} />
					</Routes>
				</main>
				{footer()}
			</>
		</Router>
	);
}

export default App;
