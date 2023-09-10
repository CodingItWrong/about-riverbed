import {useColorMode} from '@docusaurus/theme-common';
import React from 'react';

export default function AppStoreBadges() {
  const {colorMode} = useColorMode();
  const badgeColor = colorMode === 'dark' ? 'white' : 'black';

  const appStoreUrl =
    'https://apps.apple.com/us/app/riverbed-info-management/id6448536545'; // same for both stores

  return (
    <div>
      <a href={appStoreUrl} target="_blank" rel="noreferrer">
        <img
          src={`/ios-app-store-${badgeColor}.svg`}
          alt="Download on the App Store"
          target="_blank"
        />
      </a>{' '}
      <a href={appStoreUrl} target="_blank" rel="noreferrer">
        <img
          src={`/mac-app-store-${badgeColor}.svg`}
          alt="Download on the Mac App Store"
        />
      </a>
    </div>
  );
}
