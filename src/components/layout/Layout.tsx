import { Box } from "@mui/material";
import Navbar from "./Navbar";

interface LayoutProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  children: React.ReactNode;
}

const Layout = ({ mode, setMode, children }: LayoutProps) => {
  return (
    <Box>
      <Navbar mode={mode} setMode={setMode} />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default Layout;
