import { Box } from "@mui/material";
import Navbar from "./Navbar";

interface LayoutProps {
 
  children: React.ReactNode;
}

const Layout = ({  children }: LayoutProps) => {
  return (
    <Box>
      <Navbar  />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default Layout;
