import {
	Box,
} from 'reflexbox';
import styled from 'styled-components';

import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

const baseFontColor = '#2D2D2D'

const ImageContainer = styled.div`
	position: relative;
	width: 100%
`;

const Image = styled.img`
  object-fit: contain;
	aspect-ratio: 1.125;
	max-height: 280px;
	max-width: 315px;
	width: auto;
  height: auto;
`;

const IconImage = styled.img`
	height: 36px;
`;

const Button = styled.button`
	top: 0;
	right: 0;
	position: absolute;
	background: none;
	outline: none;
	border: none;
	height: auto;
	padding: 0;
	margin: 10px;
	width: auto;
`;

// Text Styles
const PropertyDetails = styled.h5`
	font-color: ${baseFontColor};
  font-size: 20px;
	font-weight: 600;
	line-height: 32px;
	margin: 10px 0;
`;

const ListPrice = styled.p`
	font-color: ${baseFontColor};
	font-size: 26px;
	font-weight: 700;
	line-height: 24px;
	margin: 10px 0;
`;

const Address = styled.p`
	font-color: ${baseFontColor};
	font-size: 12px;
	font-weight: 400;
	line-height: 26px;
	margin: 12px 0 6px 0;
`;

const ListDate = styled.p`
	color: #979797;
	font-size: 9px;
	line-height: 14px;
`;

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

//    getFormattedDate :: Date -> String
const getFormattedDate = (date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = (1 + date.getMonth()).toString();
  const day = date.getDate().toString();
  return month + '/' + day + '/' + year;
}

const Card = props => {
	const {
		address: {
			full,
			state,
			city
		},
		listPrice,
		listDate: _listDate,
		property: {
			bedrooms,
			bathsFull,
			bathsHalf,
			area,
		}
	} = props.listing;
	const listDate = new Date(_listDate);

	return <Box maxWidth={'300px'} p={0} marginX={38} marginY={16}>
		<ImageContainer>
			<Image src={props.listing.photos[0]} />
			<Button onClick={props.setFavorite}>
				{
					props.favorite ?
					<IconImage src={heartFill} className="App-logo" alt="favorite icon" /> :
					<IconImage src={heartStroke} className="App-logo" alt="unfavorite icon" />
				}
			</Button>
		</ImageContainer>
		<Box width={1}>
      <PropertyDetails>{bedrooms} BR | {bathsFull + bathsHalf * 0.5} Bath | {area} Sq Ft</PropertyDetails>
			<ListPrice>{currencyFormatter.format(listPrice)}</ListPrice>
			<Address>{full}, {city}, {state}</Address>
			<ListDate>listed on {getFormattedDate(listDate)}</ListDate>
		</Box>
	</Box>
}

export default Card;
