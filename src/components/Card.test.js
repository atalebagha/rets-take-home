import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card from './Card';

const listing = {
  "privateRemarks": "This property is a trial property to test the SimplyRETS. Private agent remarks will be included in this field for use in the SimplyRETS REST API. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "showingContactName": null,
  "property": {
    "roof": "Tile",
    "cooling": null,
    "style": "Traditional",
    "area": 1043,
    "bathsFull": 5,
    "bathsHalf": 6,
    "stories": 3,
    "fireplaces": 1,
    "flooring": null,
    "heating": "Radiant Heat",
    "bathrooms": null,
    "foundation": "Slab",
    "laundryFeatures": "Area,Electric Dryer Hookup,Individual Room,Washer Hookup",
    "occupantName": null,
    "ownerName": null,
    "lotDescription": "Private Backyard",
    "pool": "Association,Private,In Ground",
    "subType": null,
    "bedrooms": 2,
    "interiorFeatures": "Drapes/Curtains/Window Cover, Fire/Smoke Alarm, High Ceiling, Island Kitchen",
    "lotSize": "127X146",
    "areaSource": "Floorplans",
    "maintenanceExpense": null,
    "additionalRooms": "Recreation,Master Bedroom,See Remarks",
    "exteriorFeatures": "Back Yard Fenced, Covered Patio/Deck, Patio/Deck",
    "water": null,
    "view": "Golf Course",
    "lotSizeArea": null,
    "subdivision": "Waterstone Springs",
    "construction": "In Kitchen,Stackable,Washer Included",
    "parking": {
      "leased": null,
      "spaces": 6,
      "description": "Garage Door Opener,Public,Garage,Side by Side"
    },
    "lotSizeAreaUnits": null,
    "type": "RES",
    "garageSpaces": 8.74556425245327,
    "bathsThreeQuarter": null,
    "accessibility": "Manned Gate",
    "acres": null,
    "occupantType": null,
    "subTypeText": null,
    "yearBuilt": 1998
  },
  "mlsId": 1005192,
  "showingContactPhone": null,
  "terms": "Conventional",
  "showingInstructions": "The showing instructions for this trial property are brought to you by the SimplyRETS team. This field will include any showing remarks for the given listing in your RETS feed. Enjoy!",
  "office": {
    "contact": null,
    "name": null,
    "servingName": null,
    "brokerid": null
  },
  "leaseTerm": null,
  "disclaimer": "This information is believed to be accurate, but without warranty.",
  "specialListingConditions": null,
  "originalListPrice": null,
  "address": {
    "crossStreet": "Dunne Ave",
    "state": "Texas",
    "country": "United States",
    "postalCode": "77096",
    "streetName": "East Sweet Bottom Br",
    "streetNumberText": "74434",
    "city": "Houston",
    "streetNumber": 74434,
    "full": "74434 East Sweet Bottom Br #18393",
    "unit": "18393"
  },
  "agreement": "Purchaser Exemptions",
  "listDate": "2011-05-23T18:50:30.184391Z",
  "agent": {
    "officeMlsId": null,
    "lastName": "Phelps",
    "contact": null,
    "address": null,
    "firstName": "Shoshana",
    "id": "sphelps"
  },
  "modified": "2015-11-14T17:57:26.262392Z",
  "school": {
    "middleSchool": "FALCON PASS",
    "highSchool": "Cy Creek",
    "elementarySchool": "HAYES",
    "district": null
  },
  "photos": [
    "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg",
    "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg"
  ],
  "listPrice": 20714261,
  "internetAddressDisplay": null,
  "listingId": "49699701",
  "mls": {
    "status": "Active",
    "area": "Spring/Klein",
    "daysOnMarket": 862,
    "originalEntryTimestamp": null,
    "originatingSystemName": null,
    "statusText": "½~Yi",
    "areaMinor": null
  },
  "internetEntireListingDisplay": null,
  "geo": {
    "county": "North",
    "lat": 29.689418,
    "lng": -95.474464,
    "marketArea": "Spring/Klein",
    "directions": "From 290 exit Barker Cypress to left on Tuckerton, right on Danbury Bridge, right on Bending Post, right on Driftwood Prairie"
  },
  "tax": {
    "taxYear": 1981,
    "taxAnnualAmount": 3180,
    "id": "593-723-781-8056"
  },
  "coAgent": {
    "officeMlsId": null,
    "lastName": null,
    "contact": null,
    "address": null,
    "firstName": null,
    "id": "ACME12"
  },
  "sales": {
    "closeDate": "1996-10-21T15:15:54.171139Z",
    "office": {
      "contact": null,
      "name": "Acme Brokerage",
      "servingName": "Acme Brokerage",
      "brokerid": "ACME12"
    },
    "closePrice": 17946033,
    "agent": {
      "officeMlsId": "ACME12",
      "lastName": "Long",
      "contact": null,
      "address": null,
      "firstName": "Buffy",
      "id": "blong"
    },
    "contractDate": null
  },
  "ownership": null,
  "leaseType": "FullServ",
  "virtualTourUrl": null,
  "remarks": "This property is a trial property to test the SimplyRETS. This field will include remarks or descriptions from your RETS feed intended for public view. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "association": {
    "frequency": null,
    "fee": 1000,
    "name": "SimplyRETS Home Owners Association",
    "amenities": "Club House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub"
  }
};

test('Card renders correctly', () => {
	const setFavorite = jest.fn()
  const component = render(
    <Card listing={listing} setFavorite={setFavorite} favorite={false} />,
  );
  const card = component.baseElement.innerHTML;
  expect(card).toMatchSnapshot();

  // manually trigger the callback
  fireEvent.click(component.baseElement.querySelector('button'));
	const componentFavorite = render(
    <Card listing={listing} setFavorite={setFavorite} favorite={true} />,
  );
	const cardFavorite = componentFavorite.baseElement.innerHTML;

  // re-rendering
  expect(componentFavorite.baseElement.innerHTML).toMatchSnapshot();
	expect(card).not.toEqual(cardFavorite);
	expect(setFavorite).toHaveBeenCalled();
});
