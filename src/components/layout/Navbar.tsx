import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

interface NavbarProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const Navbar = ({ mode, setMode }: NavbarProps) => {
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo / Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "text.primary", fontWeight: 600 }}
        >
          Tharun
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography component={Link} to="/projects" sx={linkStyle}>
            Projects
          </Typography>
          <Typography component={Link} to="/experience" sx={linkStyle}>
            Experience
          </Typography>
          <Typography component={Link} to="/contact" sx={linkStyle}>
            Contact
          </Typography>

          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "text.primary",
  fontWeight: 500,
};

export default Navbar;
