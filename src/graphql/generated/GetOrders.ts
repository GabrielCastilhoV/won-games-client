/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrders
// ====================================================

export interface GetOrders_orders_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GetOrders_orders_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GetOrders_orders_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: GetOrders_orders_games_cover | null;
  developers: GetOrders_orders_games_developers[];
  price: number;
}

export interface GetOrders_orders {
  __typename: "Order";
  id: string;
  created_at: any;
  card_brand: string | null;
  card_last4: string | null;
  games: GetOrders_orders_games[];
}

export interface GetOrders {
  orders: GetOrders_orders[];
}

export interface GetOrdersVariables {
  identifier: string;
}
