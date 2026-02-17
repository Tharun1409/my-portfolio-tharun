import {
  Box,
  Container,
  Typography,

  Chip,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import { Projects } from "../../data/Projects"

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = Projects.find((p) => p.id === id);

  // 🛑 Safety check
  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" fontWeight={600}>
          Project not found
        </Typography>
        <Button sx={{ mt: 3 }} onClick={() => navigate("/projects")}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Box
  sx={{
    minHeight: "100vh",
    py: { xs: 6, md: 12 },
  }}
>
  <Container maxWidth="md">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back
        </Button>

        {/* Title */}
       <Typography
  variant="h2"
  fontWeight={800}
  sx={{
    lineHeight: 1.2,
    mb: 3,
  }}
>
  {project.projectTitle}
</Typography>

        {/* Description */}
       <Typography
  variant="body1"
  color="text.secondary"
  sx={{
    fontSize: "1.1rem",
    lineHeight: 1.8,
    maxWidth: 700,
  }}
>
  {project.description}
</Typography>

        {/* Tech Stack */}
        {/* <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
          Tech Stack
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Stack> */}

        <Box sx={{ mt: 8 }}>
  <Typography
    variant="h5"
    fontWeight={700}
    sx={{ mb: 3 }}
  >
    Tech Stack
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 1.5,
    }}
  >
    {project.tech.map((t) => (
      <Chip
        key={t}
        label={t}
        sx={{
          backgroundColor: "#1e1e1e",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
    ))}
  </Box>
</Box>

      </Container>
    </Box>
  );
};

export default ProjectDetails;
