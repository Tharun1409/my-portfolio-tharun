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
  onClick={() => navigate(`/projects/${project.id}`)}
  sx={{
    borderRadius: 4,
    p: 1,
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    transition: "all 0.3s ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: 6,
      borderColor: "primary.main",
    },
  }}
>
    <CardContent>
  <Typography
    variant="h5"
    fontWeight={700}
    sx={{ mb: 1 }}
  >
    {project.projectTitle}
  </Typography>

  <Typography
    variant="body1"
    color="text.secondary"
    sx={{ mb: 2 }}
  >
    {project.description}
  </Typography>

  <Stack
    direction="row"
    spacing={1}
    flexWrap="wrap"
    useFlexGap
  >
    {project.tech.map((t) => (
      <Chip
        key={t}
        label={t}
        size="small"
        sx={{
          fontWeight: 500,
          borderRadius: 2,
          backgroundColor: "action.hover",
        }}
      />
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
