import AtIcon from 'mdi-react/AtIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import LinkIcon from 'mdi-react/LinkIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubIcon from 'mdi-react/GithubIcon';

import { useCV } from '../core';
import { DetailsItem } from '../components/DetailsItem';
import { HeaderDetails } from '../components/Header';

export const AccountSection = () => {
  const { accounts: [account] } = useCV();
  if (!account) {
    return null;
  }
  return (
    <HeaderDetails>
      {account.email && (
        <DetailsItem Icon={AtIcon}>
          <a href={`mailto:${account.email}`}>
            {account.email}
          </a>
        </DetailsItem>
      )}
      {account.phoneNumber
        && account.phoneNumber.map((number) => (
          <DetailsItem key={number} Icon={PhoneIcon}>
            <a href={`tel:${number}`}>
              {number}
            </a>
          </DetailsItem>
        ))}
      {account.location && (
        <DetailsItem Icon={MapMarkerIcon}>
          <a href={`https://maps.google.com/?q=${account.location}`}>
            {account.location}
          </a>
        </DetailsItem>
      )}
      {account.website && (
        <DetailsItem Icon={LinkIcon}>
          <a href={`http://${account.website}`}>
            {account.website}
          </a>
        </DetailsItem>
      )}
      {account.twitter && (
        <DetailsItem Icon={TwitterIcon}>
          <a href={`http://twitter.com/${account.twitter.substr(1)}`}>
            {account.twitter}
          </a>
        </DetailsItem>
      )}
      {account.linkedIn && (
        <DetailsItem Icon={LinkedinIcon}>
          <a href={`http://${account.linkedIn}`}>
            {account.linkedIn}
          </a>
        </DetailsItem>
      )}
      {account.github && (
        <DetailsItem Icon={GithubIcon}>
          <a href={`http://${account.github}`}>
            {account.github}
          </a>
        </DetailsItem>
      )}
    </HeaderDetails>
  );
};

export default AccountSection;
