import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/DappPages/Home/Home';
import Epoch from './components/DappPages/Epoch/Epoch';
import Layout from './components/Navigation/Layout/Layout';

function App() {
	const routes = (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Epoch" component={Epoch} />
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
