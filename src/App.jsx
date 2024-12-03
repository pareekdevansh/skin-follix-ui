import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import SideBar from "./components/sidebar/SideBar";


function App() {
	return (
		<div className="app">
			<div className="overlay">
				{/* <SideBar /> */}
			</div>
			<NavBar />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export default App;
