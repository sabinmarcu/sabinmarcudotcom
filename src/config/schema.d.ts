import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard
   * for representation of dates using the Gregorian calendar.
   */
  Date: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601
   * standard for representationof dates and times using the Gregorian calendar.
   */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /**
   * The Long scalar type represents non-fractional signed whole numeric values. Long
   * can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Account = Node & {
  __typename?: 'Account';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Account>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber: Array<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  /** List of Account versions */
  history: Array<Version>;
};


export type AccountDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type AccountCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type AccountUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type AccountPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type AccountHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type AccountConnectInput = {
  /** Document to connect */
  where: AccountWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AccountEdge>;
  aggregate: Aggregate;
};

export type AccountCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber: Array<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
};

export type AccountCreateManyInlineInput = {
  /** Create and connect multiple existing Account documents */
  create?: Maybe<Array<AccountCreateInput>>;
  /** Connect multiple existing Account documents */
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
};

export type AccountCreateOneInlineInput = {
  /** Create and connect one Account document */
  create?: Maybe<AccountCreateInput>;
  /** Connect one existing Account document */
  connect?: Maybe<AccountWhereUniqueInput>;
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** The item at the end of the edge. */
  node: Account;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AccountManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tagline_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tagline_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tagline_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tagline_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tagline_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tagline_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tagline_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tagline_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tagline_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  phoneNumber?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  phoneNumber_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  phoneNumber_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  phoneNumber_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  phoneNumber_contains_none?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  facebook_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebook_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  facebook_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  facebook_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebook_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebook_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  facebook_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebook_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebook_not_ends_with?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  twitter_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitter_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  twitter_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  twitter_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitter_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitter_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitter_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitter_not_ends_with?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  github_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  github_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  github_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  github_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  github_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  github_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  github_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  github_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  github_not_ends_with?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  linkedIn_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedIn_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  linkedIn_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC'
}

export type AccountUpdateInput = {
  name?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
};

export type AccountUpdateManyInlineInput = {
  /** Create and connect multiple Account documents */
  create?: Maybe<Array<AccountCreateInput>>;
  /** Connect multiple existing Account documents */
  connect?: Maybe<Array<AccountConnectInput>>;
  /** Override currently-connected documents with multiple existing Account documents */
  set?: Maybe<Array<AccountWhereUniqueInput>>;
  /** Update multiple Account documents */
  update?: Maybe<Array<AccountUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Account documents */
  upsert?: Maybe<Array<AccountUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Account documents */
  disconnect?: Maybe<Array<AccountWhereUniqueInput>>;
  /** Delete multiple Account documents */
  delete?: Maybe<Array<AccountWhereUniqueInput>>;
};

export type AccountUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
};

export type AccountUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AccountWhereInput;
  /** Update many input */
  data: AccountUpdateManyInput;
};

export type AccountUpdateOneInlineInput = {
  /** Create and connect one Account document */
  create?: Maybe<AccountCreateInput>;
  /** Update single Account document */
  update?: Maybe<AccountUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Account document */
  upsert?: Maybe<AccountUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Account document */
  connect?: Maybe<AccountWhereUniqueInput>;
  /** Disconnect currently connected Account document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Account document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AccountUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AccountWhereUniqueInput;
  /** Document to update */
  data: AccountUpdateInput;
};

export type AccountUpsertInput = {
  /** Create document if it didn't exist */
  create: AccountCreateInput;
  /** Update document if it exists */
  update: AccountUpdateInput;
};

export type AccountUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AccountWhereUniqueInput;
  /** Upsert data */
  data: AccountUpsertInput;
};

/** Identifies documents */
export type AccountWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tagline_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tagline_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tagline_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tagline_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tagline_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tagline_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tagline_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tagline_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tagline_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  phoneNumber?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  phoneNumber_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  phoneNumber_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  phoneNumber_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  phoneNumber_contains_none?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  facebook_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebook_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  facebook_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  facebook_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebook_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebook_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  facebook_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebook_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebook_not_ends_with?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  twitter_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitter_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  twitter_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  twitter_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitter_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitter_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitter_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitter_not_ends_with?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  github_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  github_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  github_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  github_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  github_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  github_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  github_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  github_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  github_not_ends_with?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  linkedIn_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedIn_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  linkedIn_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Account record uniquely */
export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  projectPreview: Array<Project>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetProjectPreviewArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  projectPreview?: Maybe<ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  projectPreview_every?: Maybe<ProjectWhereInput>;
  projectPreview_some?: Maybe<ProjectWhereInput>;
  projectPreview_none?: Maybe<ProjectWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  projectPreview?: Maybe<ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  projectPreview_every?: Maybe<ProjectWhereInput>;
  projectPreview_some?: Maybe<ProjectWhereInput>;
  projectPreview_none?: Maybe<ProjectWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type BlogPost = Node & {
  __typename?: 'BlogPost';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<BlogPost>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of BlogPost versions */
  history: Array<Version>;
};


export type BlogPostDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type BlogPostCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogPostUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogPostPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogPostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type BlogPostConnectInput = {
  /** Document to connect */
  where: BlogPostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<BlogPostEdge>;
  aggregate: Aggregate;
};

export type BlogPostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogPostCreateManyInlineInput = {
  /** Create and connect multiple existing BlogPost documents */
  create?: Maybe<Array<BlogPostCreateInput>>;
  /** Connect multiple existing BlogPost documents */
  connect?: Maybe<Array<BlogPostWhereUniqueInput>>;
};

export type BlogPostCreateOneInlineInput = {
  /** Create and connect one BlogPost document */
  create?: Maybe<BlogPostCreateInput>;
  /** Connect one existing BlogPost document */
  connect?: Maybe<BlogPostWhereUniqueInput>;
};

/** An edge in a connection. */
export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  /** The item at the end of the edge. */
  node: BlogPost;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type BlogPostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogPostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum BlogPostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type BlogPostUpdateInput = {
  /** No fields in update input */
  _?: Maybe<Scalars['String']>;
};

export type BlogPostUpdateManyInlineInput = {
  /** Create and connect multiple BlogPost documents */
  create?: Maybe<Array<BlogPostCreateInput>>;
  /** Connect multiple existing BlogPost documents */
  connect?: Maybe<Array<BlogPostConnectInput>>;
  /** Override currently-connected documents with multiple existing BlogPost documents */
  set?: Maybe<Array<BlogPostWhereUniqueInput>>;
  /** Update multiple BlogPost documents */
  update?: Maybe<Array<BlogPostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogPost documents */
  upsert?: Maybe<Array<BlogPostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple BlogPost documents */
  disconnect?: Maybe<Array<BlogPostWhereUniqueInput>>;
  /** Delete multiple BlogPost documents */
  delete?: Maybe<Array<BlogPostWhereUniqueInput>>;
};

export type BlogPostUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type BlogPostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: BlogPostWhereInput;
  /** Update many input */
  data: BlogPostUpdateManyInput;
};

export type BlogPostUpdateOneInlineInput = {
  /** Create and connect one BlogPost document */
  create?: Maybe<BlogPostCreateInput>;
  /** Update single BlogPost document */
  update?: Maybe<BlogPostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogPost document */
  upsert?: Maybe<BlogPostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing BlogPost document */
  connect?: Maybe<BlogPostWhereUniqueInput>;
  /** Disconnect currently connected BlogPost document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected BlogPost document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type BlogPostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogPostWhereUniqueInput;
  /** Document to update */
  data: BlogPostUpdateInput;
};

export type BlogPostUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogPostCreateInput;
  /** Update document if it exists */
  update: BlogPostUpdateInput;
};

export type BlogPostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogPostWhereUniqueInput;
  /** Upsert data */
  data: BlogPostUpsertInput;
};

/** Identifies documents */
export type BlogPostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogPostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References BlogPost record uniquely */
export type BlogPostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Education = Node & {
  __typename?: 'Education';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Education>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  degree: Scalars['String'];
  institution: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
  /** List of Education versions */
  history: Array<Version>;
};


export type EducationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type EducationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EducationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EducationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EducationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type EducationConnectInput = {
  /** Document to connect */
  where: EducationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type EducationConnection = {
  __typename?: 'EducationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EducationEdge>;
  aggregate: Aggregate;
};

export type EducationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  degree: Scalars['String'];
  institution: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
};

export type EducationCreateManyInlineInput = {
  /** Create and connect multiple existing Education documents */
  create?: Maybe<Array<EducationCreateInput>>;
  /** Connect multiple existing Education documents */
  connect?: Maybe<Array<EducationWhereUniqueInput>>;
};

export type EducationCreateOneInlineInput = {
  /** Create and connect one Education document */
  create?: Maybe<EducationCreateInput>;
  /** Connect one existing Education document */
  connect?: Maybe<EducationWhereUniqueInput>;
};

/** An edge in a connection. */
export type EducationEdge = {
  __typename?: 'EducationEdge';
  /** The item at the end of the edge. */
  node: Education;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type EducationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EducationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EducationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EducationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  degree?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  degree_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  degree_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  degree_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  degree_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  degree_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  degree_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  degree_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  degree_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  degree_not_ends_with?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  institution_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  institution_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  institution_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  institution_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  institution_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  institution_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  institution_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  institution_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  institution_not_ends_with?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  start_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  start_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  start_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  start_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  start_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Date']>;
};

export enum EducationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  DegreeAsc = 'degree_ASC',
  DegreeDesc = 'degree_DESC',
  InstitutionAsc = 'institution_ASC',
  InstitutionDesc = 'institution_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC'
}

export type EducationUpdateInput = {
  degree?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
};

export type EducationUpdateManyInlineInput = {
  /** Create and connect multiple Education documents */
  create?: Maybe<Array<EducationCreateInput>>;
  /** Connect multiple existing Education documents */
  connect?: Maybe<Array<EducationConnectInput>>;
  /** Override currently-connected documents with multiple existing Education documents */
  set?: Maybe<Array<EducationWhereUniqueInput>>;
  /** Update multiple Education documents */
  update?: Maybe<Array<EducationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Education documents */
  upsert?: Maybe<Array<EducationUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Education documents */
  disconnect?: Maybe<Array<EducationWhereUniqueInput>>;
  /** Delete multiple Education documents */
  delete?: Maybe<Array<EducationWhereUniqueInput>>;
};

export type EducationUpdateManyInput = {
  degree?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
};

export type EducationUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EducationWhereInput;
  /** Update many input */
  data: EducationUpdateManyInput;
};

export type EducationUpdateOneInlineInput = {
  /** Create and connect one Education document */
  create?: Maybe<EducationCreateInput>;
  /** Update single Education document */
  update?: Maybe<EducationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Education document */
  upsert?: Maybe<EducationUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Education document */
  connect?: Maybe<EducationWhereUniqueInput>;
  /** Disconnect currently connected Education document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Education document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type EducationUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EducationWhereUniqueInput;
  /** Document to update */
  data: EducationUpdateInput;
};

export type EducationUpsertInput = {
  /** Create document if it didn't exist */
  create: EducationCreateInput;
  /** Update document if it exists */
  update: EducationUpdateInput;
};

export type EducationUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EducationWhereUniqueInput;
  /** Upsert data */
  data: EducationUpsertInput;
};

/** Identifies documents */
export type EducationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EducationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EducationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EducationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  degree?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  degree_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  degree_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  degree_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  degree_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  degree_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  degree_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  degree_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  degree_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  degree_not_ends_with?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  institution_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  institution_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  institution_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  institution_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  institution_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  institution_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  institution_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  institution_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  institution_not_ends_with?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  start_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  start_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  start_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  start_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  start_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Date']>;
};

/** References Education record uniquely */
export type EducationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  Crop = 'crop',
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  Scale = 'scale',
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create one account */
  createAccount?: Maybe<Account>;
  /** Update one account */
  updateAccount?: Maybe<Account>;
  /** Delete one account from _all_ existing stages. Returns deleted document. */
  deleteAccount?: Maybe<Account>;
  /** Upsert one account */
  upsertAccount?: Maybe<Account>;
  /** Publish one account */
  publishAccount?: Maybe<Account>;
  /**
   * Unpublish one account from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishAccount?: Maybe<Account>;
  /** Update many Account documents */
  updateManyAccountsConnection: AccountConnection;
  /** Delete many Account documents, return deleted documents */
  deleteManyAccountsConnection: AccountConnection;
  /** Publish many Account documents */
  publishManyAccountsConnection: AccountConnection;
  /** Find many Account documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAccountsConnection: AccountConnection;
  /**
   * Update many accounts
   * @deprecated Please use the new paginated many mutation (updateManyAccountsConnection)
   */
  updateManyAccounts: BatchPayload;
  /**
   * Delete many Account documents
   * @deprecated Please use the new paginated many mutation (deleteManyAccountsConnection)
   */
  deleteManyAccounts: BatchPayload;
  /**
   * Publish many Account documents
   * @deprecated Please use the new paginated many mutation (publishManyAccountsConnection)
   */
  publishManyAccounts: BatchPayload;
  /**
   * Unpublish many Account documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAccountsConnection)
   */
  unpublishManyAccounts: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Unpublish one asset from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one blogPost */
  createBlogPost?: Maybe<BlogPost>;
  /** Update one blogPost */
  updateBlogPost?: Maybe<BlogPost>;
  /** Delete one blogPost from _all_ existing stages. Returns deleted document. */
  deleteBlogPost?: Maybe<BlogPost>;
  /** Upsert one blogPost */
  upsertBlogPost?: Maybe<BlogPost>;
  /** Publish one blogPost */
  publishBlogPost?: Maybe<BlogPost>;
  /**
   * Unpublish one blogPost from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishBlogPost?: Maybe<BlogPost>;
  /** Update many BlogPost documents */
  updateManyBlogPostsConnection: BlogPostConnection;
  /** Delete many BlogPost documents, return deleted documents */
  deleteManyBlogPostsConnection: BlogPostConnection;
  /** Publish many BlogPost documents */
  publishManyBlogPostsConnection: BlogPostConnection;
  /** Find many BlogPost documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogPostsConnection: BlogPostConnection;
  /**
   * Update many blogPosts
   * @deprecated Please use the new paginated many mutation (updateManyBlogPostsConnection)
   */
  updateManyBlogPosts: BatchPayload;
  /**
   * Delete many BlogPost documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogPostsConnection)
   */
  deleteManyBlogPosts: BatchPayload;
  /**
   * Publish many BlogPost documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogPostsConnection)
   */
  publishManyBlogPosts: BatchPayload;
  /**
   * Unpublish many BlogPost documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogPostsConnection)
   */
  unpublishManyBlogPosts: BatchPayload;
  /** Create one education */
  createEducation?: Maybe<Education>;
  /** Update one education */
  updateEducation?: Maybe<Education>;
  /** Delete one education from _all_ existing stages. Returns deleted document. */
  deleteEducation?: Maybe<Education>;
  /** Upsert one education */
  upsertEducation?: Maybe<Education>;
  /** Publish one education */
  publishEducation?: Maybe<Education>;
  /**
   * Unpublish one education from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishEducation?: Maybe<Education>;
  /** Update many Education documents */
  updateManyEducationsConnection: EducationConnection;
  /** Delete many Education documents, return deleted documents */
  deleteManyEducationsConnection: EducationConnection;
  /** Publish many Education documents */
  publishManyEducationsConnection: EducationConnection;
  /** Find many Education documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEducationsConnection: EducationConnection;
  /**
   * Update many educations
   * @deprecated Please use the new paginated many mutation (updateManyEducationsConnection)
   */
  updateManyEducations: BatchPayload;
  /**
   * Delete many Education documents
   * @deprecated Please use the new paginated many mutation (deleteManyEducationsConnection)
   */
  deleteManyEducations: BatchPayload;
  /**
   * Publish many Education documents
   * @deprecated Please use the new paginated many mutation (publishManyEducationsConnection)
   */
  publishManyEducations: BatchPayload;
  /**
   * Unpublish many Education documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEducationsConnection)
   */
  unpublishManyEducations: BatchPayload;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /**
   * Unpublish one project from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishProject?: Maybe<Project>;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Create one skill */
  createSkill?: Maybe<Skill>;
  /** Update one skill */
  updateSkill?: Maybe<Skill>;
  /** Delete one skill from _all_ existing stages. Returns deleted document. */
  deleteSkill?: Maybe<Skill>;
  /** Upsert one skill */
  upsertSkill?: Maybe<Skill>;
  /** Publish one skill */
  publishSkill?: Maybe<Skill>;
  /**
   * Unpublish one skill from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishSkill?: Maybe<Skill>;
  /** Update many Skill documents */
  updateManySkillsConnection: SkillConnection;
  /** Delete many Skill documents, return deleted documents */
  deleteManySkillsConnection: SkillConnection;
  /** Publish many Skill documents */
  publishManySkillsConnection: SkillConnection;
  /** Find many Skill documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySkillsConnection: SkillConnection;
  /**
   * Update many skills
   * @deprecated Please use the new paginated many mutation (updateManySkillsConnection)
   */
  updateManySkills: BatchPayload;
  /**
   * Delete many Skill documents
   * @deprecated Please use the new paginated many mutation (deleteManySkillsConnection)
   */
  deleteManySkills: BatchPayload;
  /**
   * Publish many Skill documents
   * @deprecated Please use the new paginated many mutation (publishManySkillsConnection)
   */
  publishManySkills: BatchPayload;
  /**
   * Unpublish many Skill documents
   * @deprecated Please use the new paginated many mutation (unpublishManySkillsConnection)
   */
  unpublishManySkills: BatchPayload;
  /** Create one workExperience */
  createWorkExperience?: Maybe<WorkExperience>;
  /** Update one workExperience */
  updateWorkExperience?: Maybe<WorkExperience>;
  /** Delete one workExperience from _all_ existing stages. Returns deleted document. */
  deleteWorkExperience?: Maybe<WorkExperience>;
  /** Upsert one workExperience */
  upsertWorkExperience?: Maybe<WorkExperience>;
  /** Publish one workExperience */
  publishWorkExperience?: Maybe<WorkExperience>;
  /**
   * Unpublish one workExperience from selected stages. Unpublish either the
   * complete document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishWorkExperience?: Maybe<WorkExperience>;
  /** Update many WorkExperience documents */
  updateManyWorkExperiencesConnection: WorkExperienceConnection;
  /** Delete many WorkExperience documents, return deleted documents */
  deleteManyWorkExperiencesConnection: WorkExperienceConnection;
  /** Publish many WorkExperience documents */
  publishManyWorkExperiencesConnection: WorkExperienceConnection;
  /** Find many WorkExperience documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWorkExperiencesConnection: WorkExperienceConnection;
  /**
   * Update many workExperiences
   * @deprecated Please use the new paginated many mutation (updateManyWorkExperiencesConnection)
   */
  updateManyWorkExperiences: BatchPayload;
  /**
   * Delete many WorkExperience documents
   * @deprecated Please use the new paginated many mutation (deleteManyWorkExperiencesConnection)
   */
  deleteManyWorkExperiences: BatchPayload;
  /**
   * Publish many WorkExperience documents
   * @deprecated Please use the new paginated many mutation (publishManyWorkExperiencesConnection)
   */
  publishManyWorkExperiences: BatchPayload;
  /**
   * Unpublish many WorkExperience documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWorkExperiencesConnection)
   */
  unpublishManyWorkExperiences: BatchPayload;
  /** Create one workPosition */
  createWorkPosition?: Maybe<WorkPosition>;
  /** Update one workPosition */
  updateWorkPosition?: Maybe<WorkPosition>;
  /** Delete one workPosition from _all_ existing stages. Returns deleted document. */
  deleteWorkPosition?: Maybe<WorkPosition>;
  /** Upsert one workPosition */
  upsertWorkPosition?: Maybe<WorkPosition>;
  /** Publish one workPosition */
  publishWorkPosition?: Maybe<WorkPosition>;
  /**
   * Unpublish one workPosition from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishWorkPosition?: Maybe<WorkPosition>;
  /** Update many WorkPosition documents */
  updateManyWorkPositionsConnection: WorkPositionConnection;
  /** Delete many WorkPosition documents, return deleted documents */
  deleteManyWorkPositionsConnection: WorkPositionConnection;
  /** Publish many WorkPosition documents */
  publishManyWorkPositionsConnection: WorkPositionConnection;
  /** Find many WorkPosition documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWorkPositionsConnection: WorkPositionConnection;
  /**
   * Update many workPositions
   * @deprecated Please use the new paginated many mutation (updateManyWorkPositionsConnection)
   */
  updateManyWorkPositions: BatchPayload;
  /**
   * Delete many WorkPosition documents
   * @deprecated Please use the new paginated many mutation (deleteManyWorkPositionsConnection)
   */
  deleteManyWorkPositions: BatchPayload;
  /**
   * Publish many WorkPosition documents
   * @deprecated Please use the new paginated many mutation (publishManyWorkPositionsConnection)
   */
  publishManyWorkPositions: BatchPayload;
  /**
   * Unpublish many WorkPosition documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWorkPositionsConnection)
   */
  unpublishManyWorkPositions: BatchPayload;
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationUpdateAccountArgs = {
  where: AccountWhereUniqueInput;
  data: AccountUpdateInput;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationUpsertAccountArgs = {
  where: AccountWhereUniqueInput;
  upsert: AccountUpsertInput;
};


export type MutationPublishAccountArgs = {
  where: AccountWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishAccountArgs = {
  where: AccountWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyAccountsConnectionArgs = {
  where?: Maybe<AccountManyWhereInput>;
  data: AccountUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAccountsConnectionArgs = {
  where?: Maybe<AccountManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAccountsConnectionArgs = {
  where?: Maybe<AccountManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyAccountsConnectionArgs = {
  where?: Maybe<AccountManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyAccountsArgs = {
  where?: Maybe<AccountManyWhereInput>;
  data: AccountUpdateManyInput;
};


export type MutationDeleteManyAccountsArgs = {
  where?: Maybe<AccountManyWhereInput>;
};


export type MutationPublishManyAccountsArgs = {
  where?: Maybe<AccountManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyAccountsArgs = {
  where?: Maybe<AccountManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostCreateInput;
};


export type MutationUpdateBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  data: BlogPostUpdateInput;
};


export type MutationDeleteBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
};


export type MutationUpsertBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  upsert: BlogPostUpsertInput;
};


export type MutationPublishBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  data: BlogPostUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyBlogPostsArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  data: BlogPostUpdateManyInput;
};


export type MutationDeleteManyBlogPostsArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
};


export type MutationPublishManyBlogPostsArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyBlogPostsArgs = {
  where?: Maybe<BlogPostManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateEducationArgs = {
  data: EducationCreateInput;
};


export type MutationUpdateEducationArgs = {
  where: EducationWhereUniqueInput;
  data: EducationUpdateInput;
};


export type MutationDeleteEducationArgs = {
  where: EducationWhereUniqueInput;
};


export type MutationUpsertEducationArgs = {
  where: EducationWhereUniqueInput;
  upsert: EducationUpsertInput;
};


export type MutationPublishEducationArgs = {
  where: EducationWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishEducationArgs = {
  where: EducationWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyEducationsConnectionArgs = {
  where?: Maybe<EducationManyWhereInput>;
  data: EducationUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyEducationsConnectionArgs = {
  where?: Maybe<EducationManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyEducationsConnectionArgs = {
  where?: Maybe<EducationManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyEducationsConnectionArgs = {
  where?: Maybe<EducationManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyEducationsArgs = {
  where?: Maybe<EducationManyWhereInput>;
  data: EducationUpdateManyInput;
};


export type MutationDeleteManyEducationsArgs = {
  where?: Maybe<EducationManyWhereInput>;
};


export type MutationPublishManyEducationsArgs = {
  where?: Maybe<EducationManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyEducationsArgs = {
  where?: Maybe<EducationManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationUpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  where: ProjectWhereUniqueInput;
  upsert: ProjectUpsertInput;
};


export type MutationPublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationUpdateSkillArgs = {
  where: SkillWhereUniqueInput;
  data: SkillUpdateInput;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationUpsertSkillArgs = {
  where: SkillWhereUniqueInput;
  upsert: SkillUpsertInput;
};


export type MutationPublishSkillArgs = {
  where: SkillWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSkillArgs = {
  where: SkillWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  data: SkillUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  data: SkillUpdateManyInput;
};


export type MutationDeleteManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
};


export type MutationPublishManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateWorkExperienceArgs = {
  data: WorkExperienceCreateInput;
};


export type MutationUpdateWorkExperienceArgs = {
  where: WorkExperienceWhereUniqueInput;
  data: WorkExperienceUpdateInput;
};


export type MutationDeleteWorkExperienceArgs = {
  where: WorkExperienceWhereUniqueInput;
};


export type MutationUpsertWorkExperienceArgs = {
  where: WorkExperienceWhereUniqueInput;
  upsert: WorkExperienceUpsertInput;
};


export type MutationPublishWorkExperienceArgs = {
  where: WorkExperienceWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishWorkExperienceArgs = {
  where: WorkExperienceWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyWorkExperiencesConnectionArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  data: WorkExperienceUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyWorkExperiencesConnectionArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyWorkExperiencesConnectionArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyWorkExperiencesConnectionArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyWorkExperiencesArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  data: WorkExperienceUpdateManyInput;
};


export type MutationDeleteManyWorkExperiencesArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
};


export type MutationPublishManyWorkExperiencesArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyWorkExperiencesArgs = {
  where?: Maybe<WorkExperienceManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateWorkPositionArgs = {
  data: WorkPositionCreateInput;
};


export type MutationUpdateWorkPositionArgs = {
  where: WorkPositionWhereUniqueInput;
  data: WorkPositionUpdateInput;
};


export type MutationDeleteWorkPositionArgs = {
  where: WorkPositionWhereUniqueInput;
};


export type MutationUpsertWorkPositionArgs = {
  where: WorkPositionWhereUniqueInput;
  upsert: WorkPositionUpsertInput;
};


export type MutationPublishWorkPositionArgs = {
  where: WorkPositionWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishWorkPositionArgs = {
  where: WorkPositionWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyWorkPositionsConnectionArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  data: WorkPositionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyWorkPositionsConnectionArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyWorkPositionsConnectionArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyWorkPositionsConnectionArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyWorkPositionsArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  data: WorkPositionUpdateManyInput;
};


export type MutationDeleteManyWorkPositionsArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
};


export type MutationPublishManyWorkPositionsArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyWorkPositionsArgs = {
  where?: Maybe<WorkPositionManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Project = Node & {
  __typename?: 'Project';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  location?: Maybe<Location>;
  preview?: Maybe<Asset>;
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
  description: RichText;
  workExperience?: Maybe<WorkExperience>;
  skills: Array<Skill>;
  /** List of Project versions */
  history: Array<Version>;
};


export type ProjectDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProjectCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectPreviewArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectWorkExperienceArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectSkillsArgs = {
  where?: Maybe<SkillWhereInput>;
  orderBy?: Maybe<SkillOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProjectConnectInput = {
  /** Document to connect */
  where: ProjectWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  aggregate: Aggregate;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  location?: Maybe<LocationInput>;
  preview?: Maybe<AssetCreateOneInlineInput>;
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
  description: Scalars['RichTextAST'];
  workExperience?: Maybe<WorkExperienceCreateOneInlineInput>;
  skills?: Maybe<SkillCreateManyInlineInput>;
};

export type ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** The item at the end of the edge. */
  node: Project;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  preview?: Maybe<AssetWhereInput>;
  from?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  from_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  from_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  from_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  from_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  from_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  from_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  from_gte?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  to_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  to_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  to_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  to_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  to_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  to_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  to_gte?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperienceWhereInput>;
  skills_every?: Maybe<SkillWhereInput>;
  skills_some?: Maybe<SkillWhereInput>;
  skills_none?: Maybe<SkillWhereInput>;
};

export enum ProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC'
}

export type ProjectUpdateInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  preview?: Maybe<AssetUpdateOneInlineInput>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['RichTextAST']>;
  workExperience?: Maybe<WorkExperienceUpdateOneInlineInput>;
  skills?: Maybe<SkillUpdateManyInlineInput>;
};

export type ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  location?: Maybe<LocationInput>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['RichTextAST']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProjectWhereInput;
  /** Update many input */
  data: ProjectUpdateManyInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Document to update */
  data: ProjectUpdateInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Upsert data */
  data: ProjectUpsertInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  preview?: Maybe<AssetWhereInput>;
  from?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  from_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  from_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  from_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  from_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  from_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  from_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  from_gte?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  to_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  to_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  to_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  to_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  to_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  to_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  to_gte?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperienceWhereInput>;
  skills_every?: Maybe<SkillWhereInput>;
  skills_some?: Maybe<SkillWhereInput>;
  skills_none?: Maybe<SkillWhereInput>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple accounts */
  accounts: Array<Account>;
  /** Retrieve a single account */
  account?: Maybe<Account>;
  /** Retrieve multiple accounts using the Relay connection interface */
  accountsConnection: AccountConnection;
  /** Retrieve document version */
  accountVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogPosts */
  blogPosts: Array<BlogPost>;
  /** Retrieve a single blogPost */
  blogPost?: Maybe<BlogPost>;
  /** Retrieve multiple blogPosts using the Relay connection interface */
  blogPostsConnection: BlogPostConnection;
  /** Retrieve document version */
  blogPostVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple educations */
  educations: Array<Education>;
  /** Retrieve a single education */
  education?: Maybe<Education>;
  /** Retrieve multiple educations using the Relay connection interface */
  educationsConnection: EducationConnection;
  /** Retrieve document version */
  educationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple skills */
  skills: Array<Skill>;
  /** Retrieve a single skill */
  skill?: Maybe<Skill>;
  /** Retrieve multiple skills using the Relay connection interface */
  skillsConnection: SkillConnection;
  /** Retrieve document version */
  skillVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple workExperiences */
  workExperiences: Array<WorkExperience>;
  /** Retrieve a single workExperience */
  workExperience?: Maybe<WorkExperience>;
  /** Retrieve multiple workExperiences using the Relay connection interface */
  workExperiencesConnection: WorkExperienceConnection;
  /** Retrieve document version */
  workExperienceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple workPositions */
  workPositions: Array<WorkPosition>;
  /** Retrieve a single workPosition */
  workPosition?: Maybe<WorkPosition>;
  /** Retrieve multiple workPositions using the Relay connection interface */
  workPositionsConnection: WorkPositionConnection;
  /** Retrieve document version */
  workPositionVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAccountsArgs = {
  where?: Maybe<AccountWhereInput>;
  orderBy?: Maybe<AccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAccountsConnectionArgs = {
  where?: Maybe<AccountWhereInput>;
  orderBy?: Maybe<AccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAccountVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogPostsArgs = {
  where?: Maybe<BlogPostWhereInput>;
  orderBy?: Maybe<BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostWhereInput>;
  orderBy?: Maybe<BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryBlogPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEducationsArgs = {
  where?: Maybe<EducationWhereInput>;
  orderBy?: Maybe<EducationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryEducationArgs = {
  where: EducationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryEducationsConnectionArgs = {
  where?: Maybe<EducationWhereInput>;
  orderBy?: Maybe<EducationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryEducationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySkillsArgs = {
  where?: Maybe<SkillWhereInput>;
  orderBy?: Maybe<SkillOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillsConnectionArgs = {
  where?: Maybe<SkillWhereInput>;
  orderBy?: Maybe<SkillOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkExperiencesArgs = {
  where?: Maybe<WorkExperienceWhereInput>;
  orderBy?: Maybe<WorkExperienceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkExperienceArgs = {
  where: WorkExperienceWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkExperiencesConnectionArgs = {
  where?: Maybe<WorkExperienceWhereInput>;
  orderBy?: Maybe<WorkExperienceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkExperienceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWorkPositionsArgs = {
  where?: Maybe<WorkPositionWhereInput>;
  orderBy?: Maybe<WorkPositionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkPositionArgs = {
  where: WorkPositionWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkPositionsConnectionArgs = {
  where?: Maybe<WorkPositionWhereInput>;
  orderBy?: Maybe<WorkPositionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryWorkPositionVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type Skill = Node & {
  __typename?: 'Skill';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Skill>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  category: SkillCategory;
  ability: Scalars['Float'];
  featured: Scalars['Boolean'];
  project: Array<Project>;
  /** List of Skill versions */
  history: Array<Version>;
};


export type SkillDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SkillCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SkillUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SkillPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SkillProjectArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type SkillHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum SkillCategory {
  Database = 'database',
  Dictlang = 'dictlang',
  Language = 'language',
  Native = 'native',
  Protocol = 'protocol',
  Service = 'service',
  Styling = 'styling',
  Unix = 'unix',
  Virtualization = 'virtualization',
  Web = 'web'
}

export type SkillConnectInput = {
  /** Document to connect */
  where: SkillWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SkillConnection = {
  __typename?: 'SkillConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SkillEdge>;
  aggregate: Aggregate;
};

export type SkillCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  category: SkillCategory;
  ability: Scalars['Float'];
  featured: Scalars['Boolean'];
  project?: Maybe<ProjectCreateManyInlineInput>;
};

export type SkillCreateManyInlineInput = {
  /** Create and connect multiple existing Skill documents */
  create?: Maybe<Array<SkillCreateInput>>;
  /** Connect multiple existing Skill documents */
  connect?: Maybe<Array<SkillWhereUniqueInput>>;
};

export type SkillCreateOneInlineInput = {
  /** Create and connect one Skill document */
  create?: Maybe<SkillCreateInput>;
  /** Connect one existing Skill document */
  connect?: Maybe<SkillWhereUniqueInput>;
};

/** An edge in a connection. */
export type SkillEdge = {
  __typename?: 'SkillEdge';
  /** The item at the end of the edge. */
  node: Skill;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SkillManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SkillWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  category?: Maybe<SkillCategory>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<SkillCategory>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<SkillCategory>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<SkillCategory>>;
  ability?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  ability_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  ability_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  ability_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  ability_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  ability_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  ability_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  ability_gte?: Maybe<Scalars['Float']>;
  featured?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  featured_not?: Maybe<Scalars['Boolean']>;
  project_every?: Maybe<ProjectWhereInput>;
  project_some?: Maybe<ProjectWhereInput>;
  project_none?: Maybe<ProjectWhereInput>;
};

export enum SkillOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  AbilityAsc = 'ability_ASC',
  AbilityDesc = 'ability_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC'
}

export type SkillUpdateInput = {
  name?: Maybe<Scalars['String']>;
  category?: Maybe<SkillCategory>;
  ability?: Maybe<Scalars['Float']>;
  featured?: Maybe<Scalars['Boolean']>;
  project?: Maybe<ProjectUpdateManyInlineInput>;
};

export type SkillUpdateManyInlineInput = {
  /** Create and connect multiple Skill documents */
  create?: Maybe<Array<SkillCreateInput>>;
  /** Connect multiple existing Skill documents */
  connect?: Maybe<Array<SkillConnectInput>>;
  /** Override currently-connected documents with multiple existing Skill documents */
  set?: Maybe<Array<SkillWhereUniqueInput>>;
  /** Update multiple Skill documents */
  update?: Maybe<Array<SkillUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Skill documents */
  upsert?: Maybe<Array<SkillUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Skill documents */
  disconnect?: Maybe<Array<SkillWhereUniqueInput>>;
  /** Delete multiple Skill documents */
  delete?: Maybe<Array<SkillWhereUniqueInput>>;
};

export type SkillUpdateManyInput = {
  category?: Maybe<SkillCategory>;
  ability?: Maybe<Scalars['Float']>;
  featured?: Maybe<Scalars['Boolean']>;
};

export type SkillUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SkillWhereInput;
  /** Update many input */
  data: SkillUpdateManyInput;
};

export type SkillUpdateOneInlineInput = {
  /** Create and connect one Skill document */
  create?: Maybe<SkillCreateInput>;
  /** Update single Skill document */
  update?: Maybe<SkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Skill document */
  upsert?: Maybe<SkillUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Skill document */
  connect?: Maybe<SkillWhereUniqueInput>;
  /** Disconnect currently connected Skill document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Skill document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SkillUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SkillWhereUniqueInput;
  /** Document to update */
  data: SkillUpdateInput;
};

export type SkillUpsertInput = {
  /** Create document if it didn't exist */
  create: SkillCreateInput;
  /** Update document if it exists */
  update: SkillUpdateInput;
};

export type SkillUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SkillWhereUniqueInput;
  /** Upsert data */
  data: SkillUpsertInput;
};

/** Identifies documents */
export type SkillWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SkillWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  category?: Maybe<SkillCategory>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<SkillCategory>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<SkillCategory>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<SkillCategory>>;
  ability?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  ability_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  ability_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  ability_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  ability_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  ability_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  ability_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  ability_gte?: Maybe<Scalars['Float']>;
  featured?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  featured_not?: Maybe<Scalars['Boolean']>;
  project_every?: Maybe<ProjectWhereInput>;
  project_some?: Maybe<ProjectWhereInput>;
  project_none?: Maybe<ProjectWhereInput>;
};

/** References Skill record uniquely */
export type SkillWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC'
}

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type WorkExperience = Node & {
  __typename?: 'WorkExperience';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<WorkExperience>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  showName: Scalars['Boolean'];
  positions: Array<WorkPosition>;
  location: Array<Location>;
  projects: Array<Project>;
  description?: Maybe<RichText>;
  /** List of WorkExperience versions */
  history: Array<Version>;
};


export type WorkExperienceDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type WorkExperienceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkExperienceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkExperiencePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkExperiencePositionsArgs = {
  where?: Maybe<WorkPositionWhereInput>;
  orderBy?: Maybe<WorkPositionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type WorkExperienceProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type WorkExperienceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type WorkExperienceConnectInput = {
  /** Document to connect */
  where: WorkExperienceWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type WorkExperienceConnection = {
  __typename?: 'WorkExperienceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<WorkExperienceEdge>;
  aggregate: Aggregate;
};

export type WorkExperienceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  showName: Scalars['Boolean'];
  positions?: Maybe<WorkPositionCreateManyInlineInput>;
  location?: Maybe<Array<LocationInput>>;
  projects?: Maybe<ProjectCreateManyInlineInput>;
  description?: Maybe<Scalars['RichTextAST']>;
};

export type WorkExperienceCreateManyInlineInput = {
  /** Create and connect multiple existing WorkExperience documents */
  create?: Maybe<Array<WorkExperienceCreateInput>>;
  /** Connect multiple existing WorkExperience documents */
  connect?: Maybe<Array<WorkExperienceWhereUniqueInput>>;
};

export type WorkExperienceCreateOneInlineInput = {
  /** Create and connect one WorkExperience document */
  create?: Maybe<WorkExperienceCreateInput>;
  /** Connect one existing WorkExperience document */
  connect?: Maybe<WorkExperienceWhereUniqueInput>;
};

/** An edge in a connection. */
export type WorkExperienceEdge = {
  __typename?: 'WorkExperienceEdge';
  /** The item at the end of the edge. */
  node: WorkExperience;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type WorkExperienceManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WorkExperienceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WorkExperienceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WorkExperienceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  showName?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showName_not?: Maybe<Scalars['Boolean']>;
  positions_every?: Maybe<WorkPositionWhereInput>;
  positions_some?: Maybe<WorkPositionWhereInput>;
  positions_none?: Maybe<WorkPositionWhereInput>;
  projects_every?: Maybe<ProjectWhereInput>;
  projects_some?: Maybe<ProjectWhereInput>;
  projects_none?: Maybe<ProjectWhereInput>;
};

export enum WorkExperienceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShowNameAsc = 'showName_ASC',
  ShowNameDesc = 'showName_DESC'
}

export type WorkExperienceUpdateInput = {
  name?: Maybe<Scalars['String']>;
  showName?: Maybe<Scalars['Boolean']>;
  positions?: Maybe<WorkPositionUpdateManyInlineInput>;
  location?: Maybe<Array<LocationInput>>;
  projects?: Maybe<ProjectUpdateManyInlineInput>;
  description?: Maybe<Scalars['RichTextAST']>;
};

export type WorkExperienceUpdateManyInlineInput = {
  /** Create and connect multiple WorkExperience documents */
  create?: Maybe<Array<WorkExperienceCreateInput>>;
  /** Connect multiple existing WorkExperience documents */
  connect?: Maybe<Array<WorkExperienceConnectInput>>;
  /** Override currently-connected documents with multiple existing WorkExperience documents */
  set?: Maybe<Array<WorkExperienceWhereUniqueInput>>;
  /** Update multiple WorkExperience documents */
  update?: Maybe<Array<WorkExperienceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WorkExperience documents */
  upsert?: Maybe<Array<WorkExperienceUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple WorkExperience documents */
  disconnect?: Maybe<Array<WorkExperienceWhereUniqueInput>>;
  /** Delete multiple WorkExperience documents */
  delete?: Maybe<Array<WorkExperienceWhereUniqueInput>>;
};

export type WorkExperienceUpdateManyInput = {
  showName?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Array<LocationInput>>;
  description?: Maybe<Scalars['RichTextAST']>;
};

export type WorkExperienceUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: WorkExperienceWhereInput;
  /** Update many input */
  data: WorkExperienceUpdateManyInput;
};

export type WorkExperienceUpdateOneInlineInput = {
  /** Create and connect one WorkExperience document */
  create?: Maybe<WorkExperienceCreateInput>;
  /** Update single WorkExperience document */
  update?: Maybe<WorkExperienceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WorkExperience document */
  upsert?: Maybe<WorkExperienceUpsertWithNestedWhereUniqueInput>;
  /** Connect existing WorkExperience document */
  connect?: Maybe<WorkExperienceWhereUniqueInput>;
  /** Disconnect currently connected WorkExperience document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected WorkExperience document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type WorkExperienceUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WorkExperienceWhereUniqueInput;
  /** Document to update */
  data: WorkExperienceUpdateInput;
};

export type WorkExperienceUpsertInput = {
  /** Create document if it didn't exist */
  create: WorkExperienceCreateInput;
  /** Update document if it exists */
  update: WorkExperienceUpdateInput;
};

export type WorkExperienceUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WorkExperienceWhereUniqueInput;
  /** Upsert data */
  data: WorkExperienceUpsertInput;
};

/** Identifies documents */
export type WorkExperienceWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WorkExperienceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WorkExperienceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WorkExperienceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  showName?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showName_not?: Maybe<Scalars['Boolean']>;
  positions_every?: Maybe<WorkPositionWhereInput>;
  positions_some?: Maybe<WorkPositionWhereInput>;
  positions_none?: Maybe<WorkPositionWhereInput>;
  projects_every?: Maybe<ProjectWhereInput>;
  projects_some?: Maybe<ProjectWhereInput>;
  projects_none?: Maybe<ProjectWhereInput>;
};

/** References WorkExperience record uniquely */
export type WorkExperienceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type WorkPosition = Node & {
  __typename?: 'WorkPosition';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<WorkPosition>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperience>;
  /** List of WorkPosition versions */
  history: Array<Version>;
};


export type WorkPositionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type WorkPositionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkPositionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkPositionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkPositionWorkExperienceArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WorkPositionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type WorkPositionConnectInput = {
  /** Document to connect */
  where: WorkPositionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type WorkPositionConnection = {
  __typename?: 'WorkPositionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<WorkPositionEdge>;
  aggregate: Aggregate;
};

export type WorkPositionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperienceCreateOneInlineInput>;
};

export type WorkPositionCreateManyInlineInput = {
  /** Create and connect multiple existing WorkPosition documents */
  create?: Maybe<Array<WorkPositionCreateInput>>;
  /** Connect multiple existing WorkPosition documents */
  connect?: Maybe<Array<WorkPositionWhereUniqueInput>>;
};

export type WorkPositionCreateOneInlineInput = {
  /** Create and connect one WorkPosition document */
  create?: Maybe<WorkPositionCreateInput>;
  /** Connect one existing WorkPosition document */
  connect?: Maybe<WorkPositionWhereUniqueInput>;
};

/** An edge in a connection. */
export type WorkPositionEdge = {
  __typename?: 'WorkPositionEdge';
  /** The item at the end of the edge. */
  node: WorkPosition;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type WorkPositionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WorkPositionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WorkPositionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WorkPositionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  from_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  from_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  from_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  from_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  from_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  from_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  from_gte?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  to_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  to_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  to_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  to_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  to_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  to_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  to_gte?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperienceWhereInput>;
};

export enum WorkPositionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC'
}

export type WorkPositionUpdateInput = {
  name?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperienceUpdateOneInlineInput>;
};

export type WorkPositionUpdateManyInlineInput = {
  /** Create and connect multiple WorkPosition documents */
  create?: Maybe<Array<WorkPositionCreateInput>>;
  /** Connect multiple existing WorkPosition documents */
  connect?: Maybe<Array<WorkPositionConnectInput>>;
  /** Override currently-connected documents with multiple existing WorkPosition documents */
  set?: Maybe<Array<WorkPositionWhereUniqueInput>>;
  /** Update multiple WorkPosition documents */
  update?: Maybe<Array<WorkPositionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WorkPosition documents */
  upsert?: Maybe<Array<WorkPositionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple WorkPosition documents */
  disconnect?: Maybe<Array<WorkPositionWhereUniqueInput>>;
  /** Delete multiple WorkPosition documents */
  delete?: Maybe<Array<WorkPositionWhereUniqueInput>>;
};

export type WorkPositionUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};

export type WorkPositionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: WorkPositionWhereInput;
  /** Update many input */
  data: WorkPositionUpdateManyInput;
};

export type WorkPositionUpdateOneInlineInput = {
  /** Create and connect one WorkPosition document */
  create?: Maybe<WorkPositionCreateInput>;
  /** Update single WorkPosition document */
  update?: Maybe<WorkPositionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WorkPosition document */
  upsert?: Maybe<WorkPositionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing WorkPosition document */
  connect?: Maybe<WorkPositionWhereUniqueInput>;
  /** Disconnect currently connected WorkPosition document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected WorkPosition document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type WorkPositionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WorkPositionWhereUniqueInput;
  /** Document to update */
  data: WorkPositionUpdateInput;
};

export type WorkPositionUpsertInput = {
  /** Create document if it didn't exist */
  create: WorkPositionCreateInput;
  /** Update document if it exists */
  update: WorkPositionUpdateInput;
};

export type WorkPositionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WorkPositionWhereUniqueInput;
  /** Upsert data */
  data: WorkPositionUpsertInput;
};

/** Identifies documents */
export type WorkPositionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WorkPositionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WorkPositionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WorkPositionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  from_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  from_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  from_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  from_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  from_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  from_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  from_gte?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  to_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  to_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  to_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  to_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  to_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  to_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  to_gte?: Maybe<Scalars['Date']>;
  workExperience?: Maybe<WorkExperienceWhereInput>;
};

/** References WorkPosition record uniquely */
export type WorkPositionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}
