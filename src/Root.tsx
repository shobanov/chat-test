import styled, { createGlobalStyle } from 'styled-components';
// import .. from './assets/'

const StyledRoot = styled.div`
  min-height: 100%;
  background-color: #1A1A1A;
`;

const GlobalStyles = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

body { 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

button, textarea, select, p, input, span, h2, ::placeholder {
  font: inherit;
  margin: 0;
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
