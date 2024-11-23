import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<div className="app">
			<NavBar />
			<AppRoutes/>
			<Footer />
		</div>
	);
}

export default App;
