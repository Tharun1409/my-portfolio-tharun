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

const skills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "MUI",
  "Redux",
  "Context API",
  "AG Grid",
  "REST APIs",
  "Chart.js",
  "React Router",
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3}>
            <Typography variant="h3" fontWeight={700}>
              Hi, I’m Tharun Uppula 👋
            </Typography>

            <Typography variant="h5" color="text.secondary">
              React Frontend Developer · TypeScript · Enterprise UI
            </Typography>

            <Typography sx={{ maxWidth: 600 }}>
              Frontend Developer with 2+ years of experience building scalable,
              high-performance React applications and enterprise dashboards.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" component={Link} to="/projects">
                View Projects
              </Button>

              <Button
                variant="outlined"
                component="a"
                href="/Tharun_Uppula_Resume.pdf"
                target="_blank"
              >
                Download Resume
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* SKILLS */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Core Skills
          </Typography>

         <Grid container spacing={2}>
  {skills.map((skill) => (
    <Grid key={skill}>
      <Chip label={skill} />
    </Grid>
  ))}
</Grid>


        </Container>
      </Box>

      {/* FEATURED PROJECTS */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Featured Projects
          </Typography>

          <Grid container spacing={3}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Card>
      <CardContent>
        <Typography fontWeight={600}>
          Enterprise Analytics Dashboard
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Data-heavy dashboard with charts, tables, and optimized React rendering.
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Card>
      <CardContent>
        <Typography fontWeight={600}>
          Workflow Visualization System
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Interactive workflows built using React Flow.
        </Typography>
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
