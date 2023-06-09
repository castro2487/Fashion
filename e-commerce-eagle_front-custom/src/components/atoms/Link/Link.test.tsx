// Link.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Link } from './Link';

test('renders link with custom text as a children', async () => {
  render(
    <Link linkDisplayType={''} linkId={''} linkUrl={''} linkColor={''}>
      Test
    </Link>
  );
  expect(screen.findByText(/Test/i)).not.toBeNull();
});

test('renders link with custom icon as a children', () => {
  render(
    <Link
      linkDisplayType={'Icon'}
      linkId={''}
      linkUrl={''}
      linkColor={''}
      linkDisplayIcon="some-icon"
    >
      Test
    </Link>
  );
  expect(screen.getByText(/▼/i)).not.toBeNull();
});
