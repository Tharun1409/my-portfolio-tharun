import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;