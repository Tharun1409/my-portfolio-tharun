import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Projects as ProjectsData } from "../../data/Projects";
// const projects = [
//   {
//     id: "analytics-dashboard",
//     title: "Enterprise Analytics Dashboard",
//     description:
//       "Built a data-heavy dashboard with AG Grid, Chart.js, and optimized React rendering.",
//     tech: ["React", "TypeScript", "AG Grid", "Chart.js", "MUI"],
//   },
//   {
//     id: "workflow-system",
//     title: "Workflow Visualization System",
//     description:
//       "Designed interactive workflows using React Flow with complex state handling.",
//     tech: ["React", "TypeScript", "React Flow", "Redux"],
//   },
// ];


const Projects = () => {
  const navigate = useNavigate(); // ✅ Hook inside component

  return (
   <Box
  sx={{
    minHeight: "100vh",
    py: { xs: 6, md: 10 },
  }}
>
  <Container maxWidth="lg">
        {/* <Typography variant="h4" fontWeight={600} gutterBottom>
          Projects
        </Typography> */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
  <Typography
    variant="h3"
    fontWeight={800}
    sx={{ mb: 2 }}
  >
    Projects
  </Typography>

  <Typography
    color="text.secondary"
    sx={{ maxWidth: 600, mx: "auto" }}
  >
    Selected enterprise-grade systems and scalable frontend
    architectures I’ve designed and built.
  </Typography>
</Box>


        <Stack spacing={3}>
         {ProjectsData.map((project) => (
  <Card
    key={project.id}
  sx={{
    height: "100%",
    borderRadius: 3,
    background:
      "linear-gradient(145deg, #fbefef, #c89b9b)",
    border: "1px solid rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-6px)",
      border: "1px solid rgba(255,255,255,0.15)",
    },
  }}
    onClick={() => navigate(`/projects/${project.id}`)}
  >
    <CardContent>
      <Typography variant="h6" fontWeight={600}>
        {project.projectTitle}
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        {project.description}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{ mt: 2, flexWrap: "wrap" }}
      >
        {project.tech.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Stack>
    </CardContent>
  </Card>
))}

        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
