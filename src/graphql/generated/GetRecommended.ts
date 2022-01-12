/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetRecommended
// ====================================================

export interface GetRecommended_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface GetRecommended_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface GetRecommended_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: GetRecommended_recommended_section_highlight_background | null;
  floatImage: GetRecommended_recommended_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetRecommended_recommended_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetRecommended_recommended_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GetRecommended_recommended_section_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetRecommended_recommended_section_games_cover | null;
  developers: GetRecommended_recommended_section_games_developers[];
  price: number;
}

export interface GetRecommended_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: GetRecommended_recommended_section_highlight | null;
  games: GetRecommended_recommended_section_games[];
}

export interface GetRecommended_recommended {
  __typename: "Recommended";
  section: GetRecommended_recommended_section | null;
}

export interface GetRecommended {
  recommended: GetRecommended_recommended | null;
}
