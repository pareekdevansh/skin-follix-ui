import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import SideBar from "./components/sidebar/SideBar";
import ChatBot from "./components/chatbot/ChatBot";


function App() {
	return (
		<div className="app">
			<div className="overlay">
				{/* <SideBar /> */}
			</div>
			<ChatBot />
			<NavBar />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export default App;
