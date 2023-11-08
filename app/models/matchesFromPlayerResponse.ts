export interface MatchesResponse {
  status: number;
  data: Datum[];
}

export interface Datum {
  is_available?: boolean;
  metadata: Metadata;
  players: Players;
  observers: any[];
  coaches: Coach[];
  teams: Teams;
  rounds: Round[];
  kills: Kill[];
}

export interface Coach {
  puuid: string;
  team: Team;
}

export enum Team {
  Blue = "Blue",
  Red = "Red",
}

export interface Kill {
  kill_time_in_round: number;
  kill_time_in_match: number;
  round?: number;
  killer_puuid: string;
  killer_display_name: DisplayName;
  killer_team: Team;
  victim_puuid: string;
  victim_display_name: DisplayName;
  victim_team: Team;
  victim_death_location: Location;
  damage_weapon_id: DamageWeaponID;
  damage_weapon_name: DamageWeaponNameEnum | null;
  damage_weapon_assets: DamageWeaponAssetsClass;
  secondary_fire_mode: boolean;
  player_locations_on_kill: PlayerLocationsOn[];
  assistants: Assistant[];
}

export interface Assistant {
  assistant_puuid: string;
  assistant_display_name: DisplayName;
  assistant_team: Team;
}

export enum DisplayName {
  BraedenLiv = "braeden#liv",
  Branpham6229 = "branpham#6229",
  Cane2XCtina = "cane2x#ctina",
  ChivalrouspeenNA1 = "chivalrouspeen#NA1",
  Dedmos333 = "dedmos#333",
  IonzeraNBAYB = "ionzera#NBAYB",
  IrlFortniteProTtv = "IRL FORTNITE PRO#TTV",
  Jvoh2545 = "jvoh#2545",
  KhoiMAXIM = "khoi#MAXIM",
  LouChall = "Lou#chall",
  MICKNUTTY333Meow = "MICKNUTTY333#meow",
  MomijiRtN = "Momiji#RtN",
  MortieNano = "Mortie#nano",
  Musty000 = "Musty#000",
  SambaeFPS = "sambae#FPS",
  Sworns0120 = "Sworns#0120",
  TeeSwift = "TEE#SWIFT",
  Tragicabyss9952 = "tragicabyss#9952",
  TruthMsngr = "Truth#msngr",
  TtvCrunchVal = "TTV CRUNCH#VAL",
  TwitchShoTUPval1738 = "Twitch ShoTUPval#1738",
  Wakanda4965 = "Wakanda#4965",
  Zekei777 = "zekei#777",
}

export interface DamageWeaponAssetsClass {
  display_icon: null | string;
  killfeed_icon: null | string;
}

export enum DamageWeaponID {
  A03B24D34319996D0F8C94Bbfba1Dfc7 = "A03B24D3-4319-996D-0F8C-94BBFBA1DFC7",
  Ability2 = "Ability2",
  Ae3De1424D852547Dd264E90Bed35Cf7 = "AE3DE142-4D85-2547-DD26-4E90BED35CF7",
  C4883E504494202C3Ec36B8A9284F00B = "C4883E50-4494-202C-3EC3-6B8A9284F00B",
  E336C6B8418D9340D77F7A9E4Cfe0702 = "E336C6B8-418D-9340-D77F-7A9E4CFE0702",
  Ec845Bf44F79DddaA3Da0Db3774B2794 = "EC845BF4-4F79-DDDA-A3DA-0DB3774B2794",
  Ee8E8D15496B07ACE5F68Fae5D4C7B1A = "EE8E8D15-496B-07AC-E5F6-8FAE5D4C7B1A",
  Empty = "",
  F7E1B4544Ad41063Ec0A159E56B58941 = "F7E1B454-4AD4-1063-EC0A-159E56B58941",
  GrenadeAbility = "GrenadeAbility",
  The1Baa85B44C70128464Bb6481Dfc3Bb4E = "1BAA85B4-4C70-1284-64BB-6481DFC3BB4E",
  The29A0Cfab485BF5D5779AB59F85E204A8 = "29A0CFAB-485B-F5D5-779A-B59F85E204A8",
  The42Da8Ccc40D5AffcBeec15Aa47B42EDA = "42DA8CCC-40D5-AFFC-BEEC-15AA47B42EDA",
  The44D4E95C4157003781B217841Bf2E8E3 = "44D4E95C-4157-0037-81B2-17841BF2E8E3",
  The462080D1403529377C0927Aa2A5C27A7 = "462080D1-4035-2937-7C09-27AA2A5C27A7",
  The4Ade7Faa4Cf1837695Ef39884480959B = "4ADE7FAA-4CF1-8376-95EF-39884480959B",
  The63E6C2B64A8E869C3D4CE38355226584 = "63E6C2B6-4A8E-869C-3D4C-E38355226584",
  The9C82E19D457502001A813Eacf00Cf872 = "9C82E19D-4575-0200-1A81-3EACF00CF872",
  Ultimate = "Ultimate",
}

export enum DamageWeaponNameEnum {
  Ares = "Ares",
  Bucky = "Bucky",
  Bulldog = "Bulldog",
  Classic = "Classic",
  Frenzy = "Frenzy",
  Ghost = "Ghost",
  Guardian = "Guardian",
  Judge = "Judge",
  Marshal = "Marshal",
  Odin = "Odin",
  Operator = "Operator",
  Phantom = "Phantom",
  Sheriff = "Sheriff",
  Shorty = "Shorty",
  Spectre = "Spectre",
  Stinger = "Stinger",
  Vandal = "Vandal",
}

export interface PlayerLocationsOn {
  player_puuid: string;
  player_display_name: DisplayName;
  player_team: Team;
  location: Location;
  view_radians: number;
}

export interface Location {
  x: number;
  y: number;
}

export interface Metadata {
  map: string;
  game_version: string;
  game_length: number;
  game_start: number;
  game_start_patched: string;
  rounds_played: number;
  mode: string;
  mode_id: string;
  queue: string;
  season_id: string;
  platform: PlatformEnum;
  matchid: string;
  premier_info: PremierInfo;
  region: string;
  cluster: string;
}

export enum PlatformEnum {
  PC = "PC",
}

export interface PremierInfo {
  tournament_id: null;
  matchup_id: null;
}

export interface Players {
  all_players: AllPlayer[];
  red: AllPlayer[];
  blue: AllPlayer[];
}

export interface AllPlayer {
  puuid: string;
  name: string;
  tag: string;
  team: Team;
  level: number;
  character: string;
  currenttier: number;
  currenttier_patched: CurrenttierPatched;
  player_card: string;
  player_title: string;
  party_id: string;
  session_playtime: SessionPlaytime;
  behavior: Behavior;
  platform: PlatformClass;
  ability_casts: AllPlayerAbilityCasts;
  assets: AllPlayerAssets;
  stats: Stats;
  economy: AllPlayerEconomy;
  damage_made: number;
  damage_received: number;
}

export interface AllPlayerAbilityCasts {
  c_cast: number | null;
  q_cast: number | null;
  e_cast: number | null;
  x_cast: number | null;
}

export interface AllPlayerAssets {
  card: Card;
  agent: Agent;
}

export interface Agent {
  small: string;
  bust: string;
  full: string;
  killfeed: string;
}

export interface Card {
  small: string;
  large: string;
  wide: string;
}

export interface Behavior {
  afk_rounds: number;
  friendly_fire: FriendlyFire;
  rounds_in_spawn: number;
}

export interface FriendlyFire {
  incoming: number;
  outgoing: number;
}

export enum CurrenttierPatched {
  Unrated = "Unrated",
}

export interface AllPlayerEconomy {
  spent: LoadoutValue;
  loadout_value: LoadoutValue;
}

export interface LoadoutValue {
  overall: number;
  average: number;
}

export interface PlatformClass {
  type: PlatformEnum;
  os: OS;
}

export interface OS {
  name: OSName;
  version: Version;
}

export enum OSName {
  Windows = "Windows",
}

export enum Version {
  The10019044125664Bit = "10.0.19044.1.256.64bit",
  The10019045125664Bit = "10.0.19045.1.256.64bit",
  The10019045176864Bit = "10.0.19045.1.768.64bit",
  The10022621125664Bit = "10.0.22621.1.256.64bit",
  The10022621176864Bit = "10.0.22621.1.768.64bit",
}

export interface SessionPlaytime {
  minutes?: number;
  seconds: number | null;
  milliseconds: number | null;
}

export interface Stats {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
}

export interface Round {
  winning_team: Team;
  end_type: EndType;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: PlantEvents;
  defuse_events: DefuseEvents;
  player_stats: PlayerStat[];
}

export interface DefuseEvents {
  defuse_location: Location | null;
  defused_by: EdBy | null;
  defuse_time_in_round: number | null;
  player_locations_on_defuse: PlayerLocationsOn[] | null;
}

export interface EdBy {
  puuid: string;
  display_name: DisplayName;
  team: Team;
}

export enum EndType {
  BombDefused = "Bomb defused",
  BombDetonated = "Bomb detonated",
  Eliminated = "Eliminated",
}

export interface PlantEvents {
  plant_location: Location | null;
  planted_by: EdBy | null;
  plant_site: PlantSite | null;
  plant_time_in_round: number | null;
  player_locations_on_plant: PlayerLocationsOn[] | null;
}

export enum PlantSite {
  A = "A",
  B = "B",
  C = "C",
}

export interface PlayerStat {
  ability_casts: PlayerStatAbilityCasts;
  player_puuid: string;
  player_display_name: DisplayName;
  player_team: Team;
  damage_events: DamageEvent[];
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events: Kill[];
  kills: number;
  score: number;
  economy: PlayerStatEconomy;
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
}

export interface PlayerStatAbilityCasts {
  c_casts: null;
  q_casts: null;
  e_cast: null;
  x_cast: null;
}

export interface DamageEvent {
  receiver_puuid: string;
  receiver_display_name: DisplayName;
  receiver_team: Team;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
}

export interface PlayerStatEconomy {
  loadout_value: number;
  weapon: Weapon;
  armor: Armor;
  remaining: number;
  spent: number;
}

export interface Armor {
  id: null | string;
  name: ArmorName | null;
  assets: ArmorAssets;
}

export interface ArmorAssets {
  display_icon: null | string;
}

export enum ArmorName {
  HeavyShields = "Heavy Shields",
  LightShields = "Light Shields",
}

export interface Weapon {
  id: null | string;
  name: DamageWeaponNameEnum | null;
  assets: DamageWeaponAssetsClass;
}

export interface Teams {
  red: Blue;
  blue: Blue;
}

export interface Blue {
  has_won: boolean;
  rounds_won: number;
  rounds_lost: number;
  roster: null;
}
