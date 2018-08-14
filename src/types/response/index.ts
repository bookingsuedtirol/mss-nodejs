export interface Address {
  city: string;
  country: string;
  street: string;
  url_streetview: string;
  zip: string;
  zipcode: string;
}

export interface Bank {
  iban: string;
  name: string;
  swift: string;
}

export interface Channel {
  base_price: Price[];
  channel_id: string;
  from_price: number;
  offer_description: Offer[];
  room_description: Room[];
  room_price: RoomPrice[];
  service_price: Price[];
}

export interface CheckInOut {
  from: string | null;
  to: string | null;
}

export interface Contact {
  email: string;
  fax: string;
  phone: string;
  web: string;
}

export interface Day {
  date: Date;
  free: number;
  restrictions: Restriction[];
}

export interface Error {
  code: number;
  message: string;
}

export interface Feature {
  id: number;
  title: string;
}

export interface Geolocation {
  altitude: number;
  distance: number;
  latitude: number;
  longitude: number;
}

export interface Header {
  error: Error;
  paging: Paging;
  result_id: string;
  source: string;
  time: string;
}

export enum Boards {
  NotDefined = 0,
  Without = 1,
  Breakfast = 2,
  HalfBoard = 4,
  FullBoard = 8,
  AllInclusive = 16
}

export interface Hotel {
  address: Address;
  bookable: number;
  channel: Channel;
  check_in: CheckInOut;
  check_out: CheckInOut;
  contact: Contact;
  description: string;
  features: number;
  features_view: Feature[];
  gallery?: Picture[];
  geolocation: Geolocation;
  headline: string;
  hotel_payment: Payment;
  id: number;
  id_lts: string | null;
  language: string;
  location: Location;
  location_name: LocationName;
  logo?: Picture[];
  lts_data: LtsData;
  matching: Matching;
  name: string;
  online_payment: Payment;
  board: Boards;
  pers_age_min: number;
  pictures?: Picture[];
  pos: string[];
  price_engine: number;
  price_from: number;
  ratings?: Rating[];
  stars: number;
  type: number;
}

export interface Location {
  id_area: number;
  id_city: number;
  id_community: number;
  id_region: number;
}

export interface LocationName {
  name_area: string;
  name_city: string;
  name_community: string;
  name_region: string;
}

export interface LtsData {
  A0Ene: number;
  A0MTV: number;
  A0Rep: number;
}

export interface Matching {
  id_bok: number;
  id_exp: number;
  id_hrs: number;
  id_htl: number;
}

export interface Occupancy {
  max: number;
  min: number;
  std: number;
}

export interface Offer {
  offer_base_id: number;
  offer_description: string;
  offer_gid: number;
  offer_id: number;
  offer_show: number;
  offer_title: string;
  offer_typ: number;
  pictures?: Picture[];
  themes: Theme[];
  title: string;
}

export interface Payment {
  bank: Bank;
  ccards: number;
  methods: number;
  prepayment: number;
}

export interface Paging {
  count: number;
  total: number;
}

export interface Picture {
  copyright: string;
  time: number;
  title: string;
  url: string;
}

export interface Price {
  description: string;
  pictures?: Picture[];
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

export interface PriceList {
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
  season: Season[];
  special_typ: number;
  title: string;
}

export interface Properties {
  area: number;
  bath_rooms: number;
  bed_rooms: number;
  dining_rooms: number;
  living_rooms: number;
  max: number;
  min: number;
  std: number;
}

export interface Rating {
  count: number;
  date: Date;
  id: string;
  provider: string;
  value: number;
}

export interface Restriction {
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

export interface Result {
  hotel: Hotel[];
  special: Special[];
}

export enum RoomType {
  Room = 1,
  Apartment = 2
}

export interface Room {
  days: Day[];
  description: string;
  features: number;
  features_view: Feature[];
  occupancy: Occupancy;
  pictures?: Picture[];
  price_from: number;
  pricelist?: PriceList[];
  properties: Properties;
  room_code: string;
  room_description: string;
  room_details: RoomDetail[];
  room_free: number;
  room_id: number;
  room_lts_id: number;
  room_numbers: string[];
  room_persons: string;
  room_price: Price[];
  room_title: string;
  room_total: number;
  room_type: RoomType;
  service: number;
  title: string;
}

export interface RoomDetail {
  availability: string;
  number: string;
}

export interface RoomPrice {
  offer_id: number;
  price_details: Price[];
  price_inclusive: Price[];
  price_total: Price;
  room_id: number;
  room_seq: number;
}

export interface Root {
  header: Header;
  result: Result;
}

export interface Season {
  date_end: Date;
  date_start: Date;
  price: Price;
}

export interface Special {
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
  hotels: Hotel[];
  inclusive?: Price[];
  offer_id: number;
  offer_typ: number;
  pictures?: Picture[];
  seasons: Season[];
  services: number[];
  special_premium: number;
  special_typ: number;
  status: number;
  themes: Theme[];
  title: string;
  valid: number;
  valid_end: Date;
  valid_start: Date;
}

export interface Theme {
  id: number;
  title: string;
}
