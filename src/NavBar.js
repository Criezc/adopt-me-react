import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/react';
import color from './color';

const spin = keyframes`
to {
    transform: rotate(360deg);
}
`;

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${color.primary};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }
          display: inline-block;
          animation: 1s ${spin} linear infinite;
        `}
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;
