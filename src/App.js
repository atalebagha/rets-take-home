/**
 * Remove this content and start here
 */
 import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { Flex, Box } from 'reflexbox';

import PropertyListings from './containers/PropertyListings';

function App() {
	const location = useLocation();

	let title;

	switch (location.pathname) {
		case '/property-listings':
			title = 'Property Listings'
			break;
		default:
			break;
	}

  return (
    <Box
			w={1}
			h={1}
			justifyContent={'center'}
			justifyItems='center'
    >
			<Flex
				color='black'
				bg='#F4F4F4'
				mw={1}
				paddingX={10}
				height={'60px'}
				flexDirection='row'
				alignItems='center'>
				<h4>{title}</h4>
				<Box mx='auto' />
			</Flex>
			<Switch>
				<Route path='/property-listings'>
					<PropertyListings />
				</Route>
			</Switch>
    </Box>
  );
}

export default App;
