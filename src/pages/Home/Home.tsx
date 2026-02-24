import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMui,
  SiRedux,
  SiAxios,
  SiNetlify,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import profile from "../../../public/profile.jpeg"

const Home = () => {
  return (
    <>
      {/* HERO */}
{/* HERO */}
<Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: (theme) =>
  theme.palette.mode === "light"
    ? "linear-gradient(135deg, #f9fafb 0%, #eef2ff 100%)"
    : "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  }}
>
  <Container maxWidth="lg">
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: { xs: 6, md: 10 },
        py: { xs: 8, md: 0 },
      }}
    >
      {/* LEFT — TEXT CONTENT */}
      <Box sx={{ flex: 1 }}>
        <Stack spacing={4}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              fontSize: { xs: "2.4rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Hi, I’m Tharun 👋
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            fontWeight={600}
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Frontend Developer — React & UI
          </Typography>

          <Typography
  sx={{
    maxWidth: 620,
    fontSize: { xs: "1rem", md: "1.15rem" },
    lineHeight: 1.8,
  }}
  color="text.secondary"
>
  I craft scalable, high-performance web applications with
  <Box component="span" sx={{ fontWeight: 600, color: "primary.main" }}>
    {" "}React & TypeScript
  </Box>
  , delivering clean architecture, optimized performance,
  and seamless user experiences.
</Typography>

          <Stack direction={{ xs: "column", sm: "row" }}
  spacing={2}
  sx={{ mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.8,
                borderRadius: 3,
                boxShadow: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
              component={Link}
              to="/projects"
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 1.8,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
              component="a"
              href="/Tharun_Uppula_Resume-Upd.pdf"
              target="_blank"
            >
              Download Resume
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* RIGHT — PROFILE IMAGE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={profile}
          alt="Tharun"
          sx={{
      width: { xs: 200, md: 300 },
      height: { xs: 200, md: 300 },
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      border: "3px solid",
      borderColor: "primary.main",
      transition: "all 0.4s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
      },
    }}
        />
      </Box>
    </Box>
  </Container>
</Box>


      {/* SKILLS */}
      <Box sx={{
        py: 14, 
         background: "linear-gradient(180deg,#0f172a,#0b1220)",
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{ letterSpacing: "-0.5px" }}>
            Technical Skills
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                transition: "all 0.3s ease",
               background: "#140a19bf",
            color: "#fff",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}>
                <Typography fontWeight={700} mb={2}>
                  Frontend & UI
                </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1.5}>
            <Chip icon={<FaReact  color="#61DBFB"/>}  label="React.js"  variant="outlined"
  sx={{ fontWeight: 500 }} />
            <Chip icon={<SiTypescript color="#3178C6"/>} label="TypeScript"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<SiJavascript color="#F7DF1E"/>} label="JavaScript"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<SiMui color="#007FFF"/>} label="MUI"  variant="outlined"
  sx={{ fontWeight: 500 }} />
            <Chip label="AG Grid"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
          </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                transition: "all 0.3s ease",
                background: "#140a19bf",
            color: "#fff",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}>
                <Typography fontWeight={700} mb={3}>
                  State & API
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
            <Chip icon={<SiRedux color="#764ABC"/>} label="Redux"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip label="Context API"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<SiAxios color="#5A29E4"/>} label="Axios"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip label="REST APIs"  variant="outlined"  sx={{ fontWeight: 500 }}/>
            <Chip icon={<RiNodejsLine color="#68A063"/>} label="Node.js"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
          </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                transition: "all 0.3s ease",
                background: "#140a19bf",
            color: "#fff",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}>
                <Typography fontWeight={700} mb={4}>
                  Tools & Platforms
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={2}>
            <Chip icon={<FaGitAlt color="#F05033"/>} label="Git"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<FaGithub color="#181717"/>} label="GitHub"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<SiNetlify color="#00C7B7"/>} label="Netlify"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<SiVercel color="#000000"/>} label="Vercel"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
            <Chip icon={<SiFigma />} label="Figma"  variant="outlined"
  sx={{ fontWeight: 500 }}/>
          </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PROJECTS */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3"
            sx={{ fontWeight: 800, letterSpacing: "-0.5px" }} fontWeight={700} gutterBottom>
            Featured Projects
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                     POS 360 — Restaurant Billing System (In Progress)
                  </Typography>

                  <Typography color="text.secondary" mt={2}>
                   Developing a full-featured Point-of-Sale system for restaurants
        with category-based menu management, order processing,
        real-time billing, and responsive dashboard for daily operations.
                  </Typography>

                  <Stack direction="row" spacing={1} mt={3} flexWrap="wrap" gap={1.5}>
                    {["React", "TypeScript", "Redux", "MUI","Node.js", "Express","API"].map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                 <Typography variant="h6" fontWeight={700}>
        SSYES Agency — Real Estate Web Application (In Progress)
      </Typography>

                  <Typography color="text.secondary" mt={2}>
        Developing a modern real estate platform for SSYES Agency to
        showcase properties, promote marketing campaigns, and facilitate
        the sale of plots and apartments with responsive design and
        user-friendly navigation.
      </Typography>

                  <Stack direction="row" spacing={1} mt={3} flexWrap="wrap" gap={1.5}>
                    {["React", "React Flow", "TypeScript", "Redux/Context API", "Chart.js","AG Grid", "Authentication", "Real-Time Updates", ].map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
