/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfileMe
// ====================================================

export interface GetProfileMe_me {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
}

export interface GetProfileMe {
  me: GetProfileMe_me | null;
}
