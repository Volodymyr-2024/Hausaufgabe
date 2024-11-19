import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  const StyledButton = styled.button`
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText || "#ffffff"};
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.palette.primary.dark};
    }

    &:active {
      transform: scale(0.95);
    }
  `;

  const Container = styled.div`
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  `;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Typography sx={{ padding: "20px" }} variant="h4">
            {theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
          </Typography>
          <StyledButton theme={theme} onClick={toggleTheme}>
            Toggle Theme
          </StyledButton>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
