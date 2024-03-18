import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link className='logo' href='/'>
      <img className='logo__img' src='/img/logo.svg' alt='Leafy Louge Logo' />
    </Link>
  );
};

export default Logo;