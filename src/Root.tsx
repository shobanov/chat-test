import styled, { createGlobalStyle } from 'styled-components';
import './assets/fonts/fonts.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
  console.log('Service worker registered:', registration);
}).catch(function(error) {
  console.log('Service workers registration error', error);
});
} else {
  console.log('Current browser does not support service workers');
}

const StyledRoot = styled.div`
  min-height: 100%;
  background-color: #1A1A1A;
`;

const GlobalStyles = createGlobalStyle`

body { 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,'Inter', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  height: 100%;
}

* { 
  font-family: 'Inter';
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;

interface IProps {
  children: React.ReactNode;
};

export const Root: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <StyledRoot>
        {children}
      </StyledRoot>
    </>
  );
};
