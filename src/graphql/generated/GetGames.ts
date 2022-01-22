/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGames
// ====================================================

export interface GetGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GetGames_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: GetGames_games_cover | null;
  developers: GetGames_games_developers[];
  price: number;
}

export interface GetGames_gamesConnection_values {
  __typename: "Game";
  id: string;
}

export interface GetGames_gamesConnection {
  __typename: "GameConnection";
  values: (GetGames_gamesConnection_values | null)[] | null;
}

export interface GetGames {
  games: GetGames_games[];
  gamesConnection: GetGames_gamesConnection | null;
}

export interface GetGamesVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
