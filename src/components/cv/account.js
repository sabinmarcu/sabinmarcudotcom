import React from 'react';

import {
  mdiAt,
  mdiPhone,
  mdiMapMarker,
  mdiLink,
  mdiTwitter,
  mdiLinkedin,
  mdiGithub,
} from '@mdi/js';

import {
  Heading,
  HeaderDetails,
} from './style';

import {
  DetailsItem,
} from './components';

import { useCV } from './core';


export const TitleSection = () => {
  const { accounts: [account] } = useCV();
  if (!account) {
    return null;
  }
  return (
    <>
      <Heading title>{account.name}</Heading>
      {account.tagline && <Heading large accent>{account.tagline}</Heading>}
    </>
  );
};

export const AccountSection = () => {
  const { accounts: [account] } = useCV();
  if (!account) {
    return null;
  }
  return (
    <HeaderDetails>
      {account.email && (
        <DetailsItem icon={mdiAt}>
          <a href={`mailto:${account.email}`}>
            {account.email}
          </a>
        </DetailsItem>
      )}
      {account.phoneNumber
        && account.phoneNumber.map((number) => (
          <DetailsItem key={number} icon={mdiPhone}>
            <a href={`tel:${number}`}>
              {number}
            </a>
          </DetailsItem>
        ))}
      {account.location && (
        <DetailsItem icon={mdiMapMarker}>
          <a href={`https://maps.google.com/?q=${account.location}`}>
            {account.location}
          </a>
        </DetailsItem>
      )}
      {account.website && (
        <DetailsItem icon={mdiLink}>
          <a href={`http://${account.website}`}>
            {account.website}
          </a>
        </DetailsItem>
      )}
      {account.twitter && (
        <DetailsItem icon={mdiTwitter}>
          <a href={`http://twitter.com/${account.twitter.substr(1)}`}>
            {account.twitter}
          </a>
        </DetailsItem>
      )}
      {account.linkedIn && (
        <DetailsItem icon={mdiLinkedin}>
          <a href={`http://${account.linkedIn}`}>
            {account.linkedIn}
          </a>
        </DetailsItem>
      )}
      {account.github && (
        <DetailsItem icon={mdiGithub}>
          <a href={`http://${account.github}`}>
            {account.github}
          </a>
        </DetailsItem>
      )}
    </HeaderDetails>
  );
};

export default AccountSection;
