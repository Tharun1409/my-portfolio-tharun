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
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          minHeight: "100vh",
          pt:8,
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(to right, #f8fafc, #eef2ff)",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Typography variant="h2" fontWeight={800}>
              Hi, I’m Tharun 👋
            </Typography>

            <Typography variant="h5" color="primary" fontWeight={600}>
              Frontend Developer — React.js & TypeScript
            </Typography>

            <Typography sx={{ maxWidth: 650 }} color="text.secondary">
              I build scalable, high-performance web applications using React,
              TypeScript, MUI, Redux, and AG Grid.
            </Typography>

            <Stack direction="row" spacing={3} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                sx={{
  px: 5,
  py: 1.8,
  borderRadius: 2,
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
  borderRadius: 2,
}}
                component="a"
                href="/Tharun_Uppula_Resume-Upd.pdf"
                target="_blank"
              >
                Download Resume
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* SKILLS */}
      <Box sx={{ py: 12,backgroundColor: (theme) =>
  theme.palette.mode === "dark"
    ? theme.palette.grey[900]
    : theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Technical Skills
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{
    p: 4,
    height: "100%",
    borderRadius: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: 8,
    },
  }}>
                <Typography fontWeight={700} mb={2}>
                  Frontend
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {[
                    "React.js",
                    "TypeScript",
                    "JavaScript",
                    "MUI",
                    "AG Grid",
                  ].map((skill) => (
                    <Chip key={skill} label={skill} sx={{ mb: 1 }} />
                  ))}
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{
    p: 4,
    height: "100%",
    borderRadius: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: 8,
    },
  }}>
                <Typography fontWeight={700} mb={2}>
                  State & Data
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {["Redux", "Context API", "REST APIs", "Axios"].map(
                    (skill) => (
                      <Chip key={skill} label={skill} sx={{ mb: 1 }} />
                    )
                  )}
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{
    p: 4,
    height: "100%",
    borderRadius: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: 8,
    },
  }}>
                <Typography fontWeight={700} mb={2}>
                  Tools & Platforms
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {["Git", "GitHub", "Netlify", "Figma"].map((skill) => (
                    <Chip key={skill} label={skill} sx={{ mb: 1 }} />
                  ))}
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
                    Enterprise Analytics Dashboard
                  </Typography>

                  <Typography color="text.secondary" mt={2}>
                    Built scalable analytics dashboards with optimized rendering
                    and reusable architecture.
                  </Typography>

                  <Stack direction="row" spacing={1} mt={3} flexWrap="wrap">
                    {["React", "TypeScript", "Redux", "MUI"].map((tech) => (
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
                    Workflow Visualization System
                  </Typography>

                  <Typography color="text.secondary" mt={2}>
                    Developed interactive workflows with optimized state
                    management.
                  </Typography>

                  <Stack direction="row" spacing={1} mt={3} flexWrap="wrap">
                    {["React", "React Flow", "TypeScript"].map((tech) => (
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
