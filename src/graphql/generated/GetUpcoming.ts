/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUpcoming
// ====================================================

export interface GetUpcoming_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetUpcoming_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface GetUpcoming_upcomingGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetUpcoming_upcomingGames_cover | null;
  developers: GetUpcoming_upcomingGames_developers[];
  price: number;
}

export interface GetUpcoming_showcase_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface GetUpcoming_showcase_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface GetUpcoming_showcase_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: GetUpcoming_showcase_upcomingGames_highlight_background | null;
  floatImage: GetUpcoming_showcase_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetUpcoming_showcase_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: GetUpcoming_showcase_upcomingGames_highlight | null;
}

export interface GetUpcoming_showcase {
  __typename: "Home";
  upcomingGames: GetUpcoming_showcase_upcomingGames | null;
}

export interface GetUpcoming {
  upcomingGames: GetUpcoming_upcomingGames[];
  showcase: GetUpcoming_showcase | null;
}

export interface GetUpcomingVariables {
  date: any;
}
