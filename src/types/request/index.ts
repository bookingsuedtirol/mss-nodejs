export interface Root {
  version: "2.0";
  header: Header;
  request: Request;
}

export interface Header {
  credentials: Credentials;
  method:
    | "getHotelList"
    | "getSpecialList"
    | "getRoomList"
    | "getPriceList"
    | "getRoomAvailability"
    | "getHotelPictures"
    | "prepareBooking"
    | "getBooking"
    | "createInquiry"
    | "getUserSources";
  paging?: Paging;
}

export interface Credentials {
  user: string;
  password: string;
  source: string;
}

export interface Paging {
  start: number;
  limit: number;
}

export interface Request {
  search: Search;
  options?: Options;
  order?: Order;
  data?: Data;
  logging?: Logging;
}

export interface Search {
  lang: "de" | "it" | "en" | "es" | "fr" | "ru" | "da";
  result_id?: string;
  agent?: string;
  id?: number[];
  search_hotel?: SearchHotel;
  search_location?: SearchLocation;
  search_distance?: SearchDistance;
  search_offer?: SearchOffer;
  search_lts?: SearchLts;
  search_special?: SearchSpecial;
  search_availability?: SearchAvailability;
  search_pricelist?: SearchPriceList;
  in?: number[];
  id_ofchannel?: string;
  transaction_id?: string;
  booking_id?: string;
  guest_email?: string;
}

export interface Options {
  hotel_details?: HotelDetails;
  offer_details?: OfferDetails;
  room_details?: RoomDetails;
  special_details?: SpecialDetails;
  pricelist_details?: PriceListDetails;
  picture_date?: string;
  lts_bookable?: number;
  get_availability?: 0 | 1;
  get_restrictions?: 0 | 1;
  get_roomdetails?: 0 | 1;
  base_price?: number;
}

export enum HotelDetails {
  BasicInfo = 1,
  Themes = 2,
  HotelFacilities = 4,
  ShortDescription = 8,
  FullDescription = 16,
  GeographicInformation = 32,
  Coordinates = 64,
  Address = 128,
  Contacts = 256,
  PaymentOptionsForOnlineBooking = 512,
  PaymentOptionsAtHotel = 1024,
  Logo = 2048,
  HeaderImages = 4096,
  Gallery = 8192,
  HotelMatching = 16384,
  GeographicalInformationAsText = 32768,
  HotelNavigatorData = 65536,
  DetailedHotelFacilities = 131072,
  SalesPoint = 524288,
  LtsSpecificParameters = 262144,
  CheckInOut = 1048576,
  SourceData = 2097152,
}

export enum OfferDetails {
  BasicInfo = 1,
  RoomCode = 4,
  RoomTitle = 8,
  PriceDetails = 16,
  RoomImages = 32,
  RoomFacilitiesFilter = 64,
  RoomDescription = 256,
  IncludedServices = 1024,
  AdditionalServices = 2048,
  RoomFacilitiesDetails = 4096,
  PriceImages = 8192,
  Themes = 16384,
  RoomFeatures = 32768,
  CancelPolicies = 262144,
  PaymentTerms = 1048576,
}

export enum PriceListDetails {
  BaseData = 1,
  Headlines = 8,
  Seasons = 4194304,
}

export enum RoomDetails {
  BasicInfo = 4,
  Title = 8,
  RoomImages = 32,
  RoomFacilitiesFilter = 64,
  RoomDescription = 256,
  RoomFacilitiesDetails = 4096,
  RoomFeatures = 32768,
  RoomNumbers = 65536,
}

export enum SpecialDetails {
  BasicInfo = 1,
  Title = 2,
  Descriptions = 4,
  Seasons = 8,
  Images = 16,
  Themes = 32,
  IncludedServices = 64,
}

export interface Order {
  field?: string;
  dir?: string;
}

export interface Data {
  guest?: Guest;
  company?: Company;
  payment?: Payment;
  note?: string;
  details?: Details;
  form?: Form;
  tracking?: Tracking;
}

export interface Logging {
  step?: string;
}

export interface SearchHotel {
  name?: string;
  type?: HotelType;
  stars?: Stars;
  feature?: HotelFeature;
  theme?: HotelTheme;
}

export enum HotelType {
  Hotel = 1,
  SkiSchool = 2,
  Residence = 4,
  Appartment = 16,
  FarmVacation = 32,
  MountainInn = 64,
  CampingSite = 128,
  HolidayHome = 256,
  YouthHostel = 512,
  Guesthouse = 1024,
  Refuge = 2048,
  Garni = 4096,
  Inn = 8192,
}

export enum HotelFeature {
  Garage = 1,
  Elevator = 2,
  Restaurant = 4,
  Gym = 8,
  Wellness = 16,
  Spa = 32,
  Breakfast = 64,
  Buffet = 128,
  OutdoorPool = 256,
  IndoorPool = 512,
  Bar = 1024,
  BarrierFree = 2048,
  Wlan = 4096,
  ShuttleService = 8192,
  Childcare = 16384,
  SmallPetsAllowed = 32768,
  BeautyFarm = 65536,
  CentralLocation = 262144,
  CoveredParking = 524288,
  OpenParking = 1048576,
  Massages = 2097152,
  Sauna = 4194304,
  SteamBath = 8388608,
  PublicBar = 16777216,
  DogsAllowed = 33554432,
}

export enum HotelTheme {
  Family = 1,
  Wellness = 2,
  Hiking = 4,
  Motorcycle = 8,
  Bike = 16,
  Golf = 32,
  Riding = 64,
  Romantic = 128,
  Ski = 256,
  Meeting = 512,
  CrossCountrySkiing = 1024,
  Culture = 2048,
  Snowshoeing = 4096,
}

export interface SearchLocation {
  location?: number[];
  location_lts?: string[];
}

export interface SearchDistance {
  latitude?: number;
  longitude?: number;
  radius?: number;
}

export interface SearchOffer {
  arrival?: Date;
  departure?: Date;
  service?: Board;
  feature?: RoomFeature;
  channel_id?: string[];
  room?: Room[];
  typ?: SearchOfferType;
  rateplan?: Rateplan;
}

export enum SearchOfferType {
  DefaultPricelist = 10,
  PeopleAge = 20,
  PeopleNumber = 21,
  Staying = 22,
  BookingDate = 23,
  Weekday = 24,
  NoReference = 25,
  SpecialPeopleAge = 50,
  SpecialPeopleNumber = 51,
  SpecialStaying = 52,
  SpecialBookingDate = 53,
  SpecialWeekday = 54,
  SpecialNoReference = 55,
}

export enum Board {
  Without = 1,
  Breakfast = 2,
  HalfBoard = 3,
  FullBoard = 4,
  AllInclusive = 5,
}

export enum RoomFeature {
  Balcony = 1,
  Terrace = 2,
  MiniBar = 4,
  Safe = 8,
  TV = 16,
  Satellite = 32,
  Wlan = 64,
  Internet = 128,
  BarrierFree = 512,
}

export interface SearchLts {
  A0Ene?: number;
  A0MTV?: number;
  A0Rep?: number;
}

export interface SearchSpecial {
  offerId?: number[];
  date_from?: Date;
  date_to?: Date;
  theme?: SpecialTheme;
  validity?: Validity;
  typ?: SearchSpecialType;
  premium?: SearchSpecialPremium;
}

export enum SearchSpecialType {
  PriceLists = 0,
  Packages = 1,
  Specials = 2,
  ShortLongStays = 4,
}

export enum SearchSpecialPremium {
  FamilyHotelsPremium = 2,
  VinumHotelsPremium = 4,
  SüdtirolBalancePremium = 8,
  VitalpinaDurchatmen = 16,
  VitalpinaWohlfühlen = 32,
  VitalpinaErnährung = 64,
  VitalpinaAktiv = 128,
  VitalpinaPremium = 256,
  BikehotelsMountainbike = 512,
  BikehotelsBikeTouringEBike = 1024,
  BikehotelsRoadbike = 2048,
  BikehotelsPremium = 4096,
  ArchitectureDays = 8192,
  VinumHotels = 16384,
  FamilyHotels = 32768,
  FamilyHotelsNatureDetective = 65536,
  FamilyHotelsNatureDetectiveWinter = 131072,
}

export enum SpecialTheme {
  Hiking = 1,
  Cycling = 2,
  Family = 4,
  Wellness = 8,
  Food = 16,
  Golf = 32,
  Culture = 64,
  Motorsport = 128,
  CarFree = 256,
  SkiSnowboard = 512,
  SummerActivities = 1024,
  Events = 2048,
  ChristmasMarkets = 4096,
  ActiveWinter = 8192,
  Vitalpina = 16384,
  VitalpinaBreathe = 32768,
  BikeHotelsEBike = 65536,
  BikeHotelsFreeride = 131072,
  BikeHotelsMountainbike = 524288,
  BikeHotelsBikeTours = 1048576,
  BikeHotelsRacingBike = 2097152,
  FamilyHotels = 4194304,
  FamilyHotelsNatureDetective = 8388608,
  FamilyHotel = 33554432,
  FamilyHotelsNatureDetectiveSummer = 67108864,
  FamilyHotelsNatureDetectiveWinter = 134217728,
}

export interface SearchAvailability {
  date_from?: Date;
  date_to?: Date;
  offer_id?: number[];
  room_id?: number[];
}

export interface SearchPriceList {
  date_from?: Date;
  date_to?: Date;
  service?: Board;
  room_id?: number[];
  typ?: SearchSpecialType;
}

export interface Guest {
  gender?: string;
  prefix?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  address?: Address;
  newsletter?: 0 | 1;
}

export interface Company {
  name?: string;
  taxnumber?: string;
  recipient_code?: string;
  address?: Address;
}

export interface Payment {
  method?: PaymentMethod;
  invoice?: 0 | 1;
}

export enum PaymentMethod {
  CreditCardDeposit = 1,
  CreditCardAsSecurity = 2,
  CreditCardPayment = 8,
  BankTransferDeposit = 4,
  BankTransferPayment = 16,
  AccommodationPayment = 32,
}

export interface Details {
  extr_price?: ExtraPrice[];
}

export interface ExtraPrice {
  price_id?: number;
  price_amount?: number;
}

export interface Form {
  url_success?: string;
  url_failure?: string;
}

export interface Tracking {
  partner?: string;
  media?: string;
  campaign?: string;
  companyinfo?: string;
}

export interface Stars {
  min?: number;
  max?: number;
}

export interface Address {
  street?: string;
  zipcode?: string;
  city?: string;
  country?: string;
}

export interface Room {
  offer_id?: number;
  room_id?: number;
  service?: Board;
  room_type?: RoomType;
  room_seq?: number;
  person?: number[];
}

export enum RoomType {
  All = 0,
  Room = 1,
  Apartment = 2,
}

export interface Rateplan {
  code?: string;
  source?: string;
}

export interface Validity {
  valid?: 0 | 1;
  offers?: 0 | 1;
  arrival?: Date;
  departure?: Date;
  service?: Board;
  room?: Room[];
}
