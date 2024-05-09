
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import EmployeeView from './component/employee/EmployeeView';
import Home from './component/employee/Home';
import NavBar from './component/common/NavBar';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-employees"
						element={<EmployeeView />}></Route>
				</Routes>
			</Router>
		</main>
  );
}

export default App;
