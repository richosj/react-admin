// src/pages/index.tsx
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Link href={'/account'}>고</Link>
    </div>
  );
};

export default Home;
