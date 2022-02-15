import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/StandardPages/Home/Home';
import About from './components/StandardPages/About/About';
import Roadmap from './components/StandardPages/Roadmap/Roadmap';
import Tokenomics from './components/StandardPages/Tokenomics/Tokenomics';
import Documentation from './components/StandardPages/Documentation/Documentation';
import Layout from './components/Navigation/Layout/Layout';

function App() {
	const routes = (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/About" component={About} />
			<Route path="/Roadmap" component={Roadmap} />
			<Route path="/Tokenomics" component={Tokenomics} />
			<Route path="/Documentation" component={Documentation} />
			<Redirect to="/" />
		</Switch>
	);

	return (
		<>
			<Layout>{routes}</Layout>
		</>
	);
}

export default App;
