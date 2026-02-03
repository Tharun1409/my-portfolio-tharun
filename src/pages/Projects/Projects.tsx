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

const projects = [
  {
    id: "analytics-dashboard",
    title: "Enterprise Analytics Dashboard",
    description:
      "Built a data-heavy dashboard with AG Grid, Chart.js, and optimized React rendering.",
    tech: ["React", "TypeScript", "AG Grid", "Chart.js", "MUI"],
  },
  {
    id: "workflow-system",
    title: "Workflow Visualization System",
    description:
      "Designed interactive workflows using React Flow with complex state handling.",
    tech: ["React", "TypeScript", "React Flow", "Redux"],
  },
];

const Projects = () => {
  const navigate = useNavigate(); // ✅ Hook inside component

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Projects
        </Typography>

        <Stack spacing={3}>
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                cursor: "pointer",
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {project.title}
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
