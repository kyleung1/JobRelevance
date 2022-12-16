export interface Location {
  name: string;
}

export interface Category {
  name: string;
}

export interface Level {
  name: string;
  short_name: string;
}

export interface Refs {
  landing_page: string;
}

export interface Company {
  id: number;
  short_name: string;
  name: string;
}

export interface Result {
  contents: string;
  name: string;
  type: string;
  publication_date: Date;
  short_name: string;
  model_type: string;
  id: number;
  locations: Location[];
  categories: Category[];
  levels: Level[];
  tags: any[];
  refs: Refs;
  company: Company;
}

export interface Aggregations {
}

export interface RootObject {
  page: number;
  page_count: number;
  items_per_page: number;
  took: number;
  timed_out: boolean;
  total: number;
  results: Result[];
  aggregations: Aggregations;
}

export type SearchProp = String;