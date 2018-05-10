import * as Primitive from './xml-primitives';

// Source files:
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/address.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/bank.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/channel.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/checkInOut.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/contact.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/day.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/days.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/error.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/feature.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/featuresView.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/geolocation.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/header.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/hotel.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/hotelPayment.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/hotels.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/location.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/locationName.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/ltsData.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/matching.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/mss.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/occupancy.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/offer.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/offerDescription.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/onlinePayment.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/paging.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/picture.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/pictures.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/pos.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/price.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/priceList.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/prices.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/properties.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/rating.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/ratings.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/restriction.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/restrictions.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/result.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/room.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/roomDescription.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/roomDetail.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/roomDetails.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/roomNumbers.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/roomPrice.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/roomPrices.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/root.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/season.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/seasons.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/services.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/special.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/theme.xsd
// https://raw.githubusercontent.com/HGV/mss-js/master/src/xsd/themes.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _Address extends BaseType {
	city: string;
	country: string;
	street: string;
	url_streetview: string;
	zip: string;
	zipcode: string;
}
export interface Address extends _Address { constructor: { new(): Address }; }
export var Address: { new(): Address };

interface _Bank extends BaseType {
	iban: string;
	name: string;
	swift: string;
}
export interface Bank extends _Bank { constructor: { new(): Bank }; }
export var Bank: { new(): Bank };

interface _Channel extends BaseType {
	base_price: Prices;
	channel_id: string;
	from_price: number;
	offer_description: OfferDescription;
	room_description: RoomDescription;
	room_price: RoomPrices;
	service_price: Prices;
}
export interface Channel extends _Channel { constructor: { new(): Channel }; }
export var Channel: { new(): Channel };

interface _CheckInOut extends BaseType {
	from: string;
	to: string;
}
export interface CheckInOut extends _CheckInOut { constructor: { new(): CheckInOut }; }
export var CheckInOut: { new(): CheckInOut };

interface _Contact extends BaseType {
	email: string;
	fax: string;
	phone: string;
	web: string;
}
export interface Contact extends _Contact { constructor: { new(): Contact }; }
export var Contact: { new(): Contact };

interface _Day extends BaseType {
	date: Date;
	free: number;
	restrictions: Restrictions;
}
export interface Day extends _Day { constructor: { new(): Day }; }
export var Day: { new(): Day };

interface _Days extends BaseType {
	day: Day[];
}
export interface Days extends _Days { constructor: { new(): Days }; }
export var Days: { new(): Days };

interface _Error extends BaseType {
	code: number;
	message: string;
}
export interface Error extends _Error { constructor: { new(): Error }; }
export var Error: { new(): Error };

interface _Feature extends BaseType {
	id: number;
	title: string;
}
export interface Feature extends _Feature { constructor: { new(): Feature }; }
export var Feature: { new(): Feature };

interface _FeaturesView extends BaseType {
	feature: Feature[];
}
export interface FeaturesView extends _FeaturesView { constructor: { new(): FeaturesView }; }
export var FeaturesView: { new(): FeaturesView };

interface _Geolocation extends BaseType {
	altitude: number;
	distance: number;
	latitude: number;
	longitude: number;
}
export interface Geolocation extends _Geolocation { constructor: { new(): Geolocation }; }
export var Geolocation: { new(): Geolocation };

interface _Header extends BaseType {
	error: Error;
	paging: Paging;
	result_id: string;
	source: string;
	time: string;
}
export interface Header extends _Header { constructor: { new(): Header }; }
export var Header: { new(): Header };

interface _Hotel extends BaseType {
	address: Address;
	bookable: number;
	channel: Channel;
	check_in: CheckInOut;
	check_out: CheckInOut;
	contact: Contact;
	description: string;
	features: number;
	features_view: FeaturesView;
	gallery: Pictures;
	geolocation: Geolocation;
	headline: string;
	hotel_payment: HotelPayment;
	id: number;
	id_lts: string;
	language: string;
	location: Location;
	location_name: LocationName;
	logo: Pictures;
	lts_data: LtsData;
	matching: Matching;
	name: string;
	online_payment: OnlinePayment;
	pers_age_min: number;
	pictures: Pictures;
	pos: Pos;
	price_engine: number;
	price_from: number;
	ratings: Ratings;
	stars: number;
	type: number;
}
export interface Hotel extends _Hotel { constructor: { new(): Hotel }; }
export var Hotel: { new(): Hotel };

interface _HotelPayment extends BaseType {
	methods: number;
}
export interface HotelPayment extends _HotelPayment { constructor: { new(): HotelPayment }; }
export var HotelPayment: { new(): HotelPayment };

interface _Hotels extends BaseType {
	hotel: Hotel[];
}
export interface Hotels extends _Hotels { constructor: { new(): Hotels }; }
export var Hotels: { new(): Hotels };

interface _Location extends BaseType {
	id_area: number;
	id_city: number;
	id_community: number;
	id_region: number;
}
export interface Location extends _Location { constructor: { new(): Location }; }
export var Location: { new(): Location };

interface _LocationName extends BaseType {
	name_area: string;
	name_city: string;
	name_community: string;
	name_region: string;
}
export interface LocationName extends _LocationName { constructor: { new(): LocationName }; }
export var LocationName: { new(): LocationName };

interface _LtsData extends BaseType {
	A0Ene: number;
	A0MTV: number;
	A0Rep: number;
}
export interface LtsData extends _LtsData { constructor: { new(): LtsData }; }
export var LtsData: { new(): LtsData };

interface _Matching extends BaseType {
	id_bok: number;
	id_exp: number;
	id_hrs: number;
	id_htl: number;
}
export interface Matching extends _Matching { constructor: { new(): Matching }; }
export var Matching: { new(): Matching };

interface _Occupancy extends BaseType {
	max: number;
	min: number;
	std: number;
}
export interface Occupancy extends _Occupancy { constructor: { new(): Occupancy }; }
export var Occupancy: { new(): Occupancy };

interface _Offer extends BaseType {
	offer_base_id: number;
	offer_description: string;
	offer_gid: number;
	offer_id: number;
	offer_show: number;
	offer_title: string;
	offer_typ: number;
	pictures: Pictures;
	themes: Themes;
	title: string;
}
export interface Offer extends _Offer { constructor: { new(): Offer }; }
export var Offer: { new(): Offer };

interface _OfferDescription extends BaseType {
	offer: Offer[];
}
export interface OfferDescription extends _OfferDescription { constructor: { new(): OfferDescription }; }
export var OfferDescription: { new(): OfferDescription };

interface _OnlinePayment extends BaseType {
	bank: Bank;
	ccards: number;
	methods: number;
	prepayment: number;
}
export interface OnlinePayment extends _OnlinePayment { constructor: { new(): OnlinePayment }; }
export var OnlinePayment: { new(): OnlinePayment };

interface _Paging extends BaseType {
	count: number;
	total: number;
}
export interface Paging extends _Paging { constructor: { new(): Paging }; }
export var Paging: { new(): Paging };

interface _Picture extends BaseType {
	copyright: string;
	time: number;
	title: string;
	url: string;
}
export interface Picture extends _Picture { constructor: { new(): Picture }; }
export var Picture: { new(): Picture };

interface _Pictures extends BaseType {
	picture: Picture[];
}
export interface Pictures extends _Pictures { constructor: { new(): Pictures }; }
export var Pictures: { new(): Pictures };

interface _Pos extends BaseType {
	id_pos: string[];
}
export interface Pos extends _Pos { constructor: { new(): Pos }; }
export var Pos: { new(): Pos };

interface _Price extends BaseType {
	description: string;
	pictures: Pictures;
	price_ai: number;
	price_amount: number;
	price_bb: number;
	price_description: string;
	price_fb: number;
	price_hb: number;
	price_id: number;
	price_supplement: number;
	price_title: string;
	price_total: number;
	price_typ: number;
	price_value: number;
	price_ws: number;
	supplement: number;
	title: string;
	unit: number;
}
export interface Price extends _Price { constructor: { new(): Price }; }
export var Price: { new(): Price };

interface _PriceList extends BaseType {
	adults_max: number;
	adults_min: number;
	children_max: number;
	children_min: number;
	days_arrival: number;
	days_arrival_max: number;
	days_arrival_min: number;
	days_departure: number;
	days_dur_max: number;
	days_dur_min: number;
	offer_base_id: number;
	offer_id: number;
	offer_typ: number;
	prl_mode: number;
	prl_unit: number;
	season: Season;
	special_typ: number;
	title: string;
}
export interface PriceList extends _PriceList { constructor: { new(): PriceList }; }
export var PriceList: { new(): PriceList };

interface _Prices extends BaseType {
	price: Price[];
}
export interface Prices extends _Prices { constructor: { new(): Prices }; }
export var Prices: { new(): Prices };

interface _Properties extends BaseType {
	area: number;
	bath_rooms: number;
	bed_rooms: number;
	dining_rooms: number;
	living_rooms: number;
	max: number;
	min: number;
	std: number;
}
export interface Properties extends _Properties { constructor: { new(): Properties }; }
export var Properties: { new(): Properties };

interface _Rating extends BaseType {
	count: number;
	date: Date;
	id: string;
	provider: string;
	value: number;
}
export interface Rating extends _Rating { constructor: { new(): Rating }; }
export var Rating: { new(): Rating };

interface _Ratings extends BaseType {
	rating: Rating[];
}
export interface Ratings extends _Ratings { constructor: { new(): Ratings }; }
export var Ratings: { new(): Ratings };

interface _Restriction extends BaseType {
	arrival: number;
	children_max: number;
	children_min: number;
	close: number;
	days_arrival_max: number;
	days_arrival_min: number;
	departure: number;
	holes: number;
	max: number;
	max_arrival: number;
	min: number;
	min_arrival: number;
	obj_id: number;
	pers_age_min: number;
	service: number;
}
export interface Restriction extends _Restriction { constructor: { new(): Restriction }; }
export var Restriction: { new(): Restriction };

interface _Restrictions extends BaseType {
	restriction: Restriction[];
}
export interface Restrictions extends _Restrictions { constructor: { new(): Restrictions }; }
export var Restrictions: { new(): Restrictions };

interface _Result extends BaseType {
	hotel: Hotel[];
	special: Special[];
}
export interface Result extends _Result { constructor: { new(): Result }; }
export var Result: { new(): Result };

interface _Room extends BaseType {
	days: Days;
	description: string;
	features: number;
	features_view: FeaturesView;
	occupancy: Occupancy;
	pictures: Pictures;
	price_from: number;
	pricelist: PriceList[];
	properties: Properties;
	room_code: string;
	room_description: string;
	room_details: RoomDetails;
	room_free: number;
	room_id: number;
	room_lts_id: number;
	room_numbers: RoomNumbers[];
	room_persons: string;
	room_price: Price[];
	room_title: string;
	room_total: number;
	room_type: number;
	service: number;
	title: string;
}
export interface Room extends _Room { constructor: { new(): Room }; }
export var Room: { new(): Room };

interface _RoomDescription extends BaseType {
	room: Room[];
}
export interface RoomDescription extends _RoomDescription { constructor: { new(): RoomDescription }; }
export var RoomDescription: { new(): RoomDescription };

interface _RoomDetail extends BaseType {
	availability: string;
	number: string;
}
export interface RoomDetail extends _RoomDetail { constructor: { new(): RoomDetail }; }
export var RoomDetail: { new(): RoomDetail };

interface _RoomDetails extends BaseType {
	room_detail: RoomDetail[];
}
export interface RoomDetails extends _RoomDetails { constructor: { new(): RoomDetails }; }
export var RoomDetails: { new(): RoomDetails };

interface _RoomNumbers extends BaseType {
	number: string;
}
export interface RoomNumbers extends _RoomNumbers { constructor: { new(): RoomNumbers }; }
export var RoomNumbers: { new(): RoomNumbers };

interface _RoomPrice extends BaseType {
	offer_id: number;
	price_details: Prices;
	price_inclusive: Price;
	price_total: Price;
	room_id: number;
	room_seq: number;
}
export interface RoomPrice extends _RoomPrice { constructor: { new(): RoomPrice }; }
export var RoomPrice: { new(): RoomPrice };

interface _RoomPrices extends BaseType {
	price: RoomPrice[];
}
export interface RoomPrices extends _RoomPrices { constructor: { new(): RoomPrices }; }
export var RoomPrices: { new(): RoomPrices };

interface _Root extends BaseType {
	header: Header;
	result: Result;
}
export interface Root extends _Root { constructor: { new(): Root }; }
export var Root: { new(): Root };

interface _Season extends BaseType {
	date_end: Date;
	date_start: Date;
	price: Price;
}
export interface Season extends _Season { constructor: { new(): Season }; }
export var Season: { new(): Season };

interface _Seasons extends BaseType {
	season: Season[];
}
export interface Seasons extends _Seasons { constructor: { new(): Seasons }; }
export var Seasons: { new(): Seasons };

interface _Services extends BaseType {
	service: number[];
}
export interface Services extends _Services { constructor: { new(): Services }; }
export var Services: { new(): Services };

interface _Special extends BaseType {
	adults_max: number;
	adults_min: number;
	children_max: number;
	children_min: number;
	days_arrival: number;
	days_arrival_max: number;
	days_arrival_min: number;
	days_departure: number;
	days_dur_max: number;
	days_dur_min: number;
	description: string;
	hotels: Hotels;
	inclusive: Prices;
	offer_id: number;
	offer_typ: number;
	pictures: Pictures;
	seasons: Seasons;
	services: Services;
	special_premium: number;
	special_typ: number;
	status: number;
	themes: Themes;
	title: string;
	valid: number;
	valid_end: Date;
	valid_start: Date;
}
export interface Special extends _Special { constructor: { new(): Special }; }
export var Special: { new(): Special };

interface _Theme extends BaseType {
	id: number;
	title: string;
}
export interface Theme extends _Theme { constructor: { new(): Theme }; }
export var Theme: { new(): Theme };

interface _Themes extends BaseType {
	theme: Theme[];
}
export interface Themes extends _Themes { constructor: { new(): Themes }; }
export var Themes: { new(): Themes };

export interface document extends BaseType {
	root: Root;
}
export var document: document;
