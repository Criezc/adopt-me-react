import React from 'react';

const ThemeContext = React.createContext<[string, (theme: string) => void]>([
  'blue',
  () => {},
]);

export default ThemeContext;
