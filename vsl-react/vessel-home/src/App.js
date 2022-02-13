import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Roadmap from './components/pages/Roadmap/Roadmap';
import Tokenomics from './components/pages/Tokenomics/Tokenomics';
import Documentation from './components/pages/Documentation/Documentation';
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
