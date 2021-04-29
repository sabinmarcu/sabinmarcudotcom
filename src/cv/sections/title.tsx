import { useCV } from '../core';
import { Heading } from '../components/Heading';

export const TitleSection = () => {
  const { accounts: [account] } = useCV();
  if (!account) {
    return null;
  }
  return (
    <>
      <Heading isTitle>{account.name}</Heading>
      {account.tagline && <Heading large accent>{account.tagline}</Heading>}
    </>
  );
};
