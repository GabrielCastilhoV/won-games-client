/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetGameBySlug
// ====================================================

export interface GetGameBySlug_games_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface GetGameBySlug_games_cover {
  __typename: "UploadFile";
  src: string;
}

export interface GetGameBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GetGameBySlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface GetGameBySlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface GetGameBySlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface GetGameBySlug_games {
  __typename: "Game";
  id: string;
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: GetGameBySlug_games_gallery[];
  cover: GetGameBySlug_games_cover | null;
  developers: GetGameBySlug_games_developers[];
  publisher: GetGameBySlug_games_publisher | null;
  categories: GetGameBySlug_games_categories[];
  platforms: GetGameBySlug_games_platforms[];
}

export interface GetGameBySlug {
  games: GetGameBySlug_games[];
}

export interface GetGameBySlugVariables {
  slug: string;
}
