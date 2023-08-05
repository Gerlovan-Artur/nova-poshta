import { Outlet } from 'react-router-dom';
import { Nav } from '../navigation/Navigation';
import Container from '../Container/Container';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <main>
      <Container>
        <Nav />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};