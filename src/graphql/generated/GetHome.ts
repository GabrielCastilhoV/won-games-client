/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetHome
// ====================================================

export interface GetHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface GetHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface GetHome_banners {
  __typename: "Banner";
  image: GetHome_banners_image | null;
  title: string;
  subtitle: string;
  button: GetHome_banners_button | null;
  ribbon: GetHome_banners_ribbon | null;
}

export interface GetHome_newGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_newGames_developers {
  __typename: "Developer";
  name: string;
}

export interface GetHome_newGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetHome_newGames_cover | null;
  developers: GetHome_newGames_developers[];
  price: number;
}

export interface GetHome_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface GetHome_upcomingGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetHome_upcomingGames_cover | null;
  developers: GetHome_upcomingGames_developers[];
  price: number;
}

export interface GetHome_freeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_freeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface GetHome_freeGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetHome_freeGames_cover | null;
  developers: GetHome_freeGames_developers[];
  price: number;
}

export interface GetHome_sections_newGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_newGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: GetHome_sections_newGames_highlight_background | null;
  floatImage: GetHome_sections_newGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetHome_sections_newGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: GetHome_sections_newGames_highlight | null;
}

export interface GetHome_sections_popularGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_popularGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: GetHome_sections_popularGames_highlight_background | null;
  floatImage: GetHome_sections_popularGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetHome_sections_popularGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_popularGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GetHome_sections_popularGames_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetHome_sections_popularGames_games_cover | null;
  developers: GetHome_sections_popularGames_games_developers[];
  price: number;
}

export interface GetHome_sections_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: GetHome_sections_popularGames_highlight | null;
  games: GetHome_sections_popularGames_games[];
}

export interface GetHome_sections_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: GetHome_sections_upcomingGames_highlight_background | null;
  floatImage: GetHome_sections_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetHome_sections_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: GetHome_sections_upcomingGames_highlight | null;
}

export interface GetHome_sections_freeGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_freeGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_sections_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: GetHome_sections_freeGames_highlight_background | null;
  floatImage: GetHome_sections_freeGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetHome_sections_freeGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: GetHome_sections_freeGames_highlight | null;
}

export interface GetHome_sections {
  __typename: "Home";
  newGames: GetHome_sections_newGames | null;
  popularGames: GetHome_sections_popularGames | null;
  upcomingGames: GetHome_sections_upcomingGames | null;
  freeGames: GetHome_sections_freeGames | null;
}

export interface GetHome {
  banners: GetHome_banners[];
  newGames: GetHome_newGames[];
  upcomingGames: GetHome_upcomingGames[];
  freeGames: GetHome_freeGames[];
  sections: GetHome_sections | null;
}

export interface GetHomeVariables {
  date: any;
}
