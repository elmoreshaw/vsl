import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Roadmap from './components/pages/Roadmap/Roadmap';
import Team from './components/pages/Team/Team';
import Tokenomics from './components/pages/Tokenomics/Tokenomics';
import Whitepaper from './components/pages/Whitepaper/Whitepaper';
import Layout from './components/Navigation/Layout/Layout';
import { useAuth0 } from '@auth0/auth0-react';
import useUserMetadata from './hooks/useUserMetadata';

function App() {
	const routes = (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/About" component={About} />
			<Route path="/Roadmap" component={Roadmap} />
			<Route path="/Tokenomics" component={Tokenomics} />
			<Route path="/Whitepaper" component={Whitepaper} />
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
