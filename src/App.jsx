import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<div className="app">
			<Navbar />
			<AppRoutes/>
			<Footer />
		</div>
	);
}

export default App;
