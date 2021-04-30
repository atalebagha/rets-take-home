import { useState, useEffect, useCallback } from 'react';
import {
	Flex,
} from 'reflexbox';
import {
	ifElse,
	omit,
	assoc,
	has,
} from 'ramda';

import Card from '../components/Card';


const fetchListings = async () => {
	const response = await fetch('https://api.simplyrets.com/properties', {
		headers: {
			Authorization: `Basic ${btoa("simplyrets:simplyrets")}`
		}
	});
	const results = await response.json();
	return results
}

const PropertyListings = props => {
	const [listings, setListings] = useState([]);
	const [favorites, setFavorites] = useState({});

	useEffect(() => {
		const _favorites = window.localStorage.getItem('__favorites');
		let parsedFavorites;
		try { parsedFavorites = JSON.parse(_favorites); } catch (err) { parsedFavorites = {}; }
		setFavorites(parsedFavorites);
		return () => {
			window.localStorage.setItem('__favorites', JSON.stringify(favorites));
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		fetchListings()
			.then(setListings);
	}, []);

	const setFavorite = useCallback(listingId => () => {
		setFavorites(prevFavorites => {
			const updatedFavorites = ifElse(
				has(listingId),
				omit([listingId]),
				assoc(listingId, true),
			) (prevFavorites);
			window.localStorage.setItem('__favorites', JSON.stringify(updatedFavorites));
			return updatedFavorites;
		});
	}, [setFavorites])

	return <Flex width={'auto'} justifyContent='center'>
		<Flex flexWrap="wrap" justifyContent='left' width={[1, 3/4, 3/4, 2/3]}>
			{listings.map((listing) => {
				return (
					<Card
						key={listing.listingId}
						listing={listing}
						favorite={has(listing.listingId, favorites)}
						setFavorite={setFavorite(listing.listingId)} />
				)
			})}
		</Flex>
	</Flex>
}

export default PropertyListings;
