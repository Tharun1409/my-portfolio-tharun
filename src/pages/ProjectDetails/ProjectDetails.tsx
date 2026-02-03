import {
  Box,
  Container,
  Typography,
  Stack,
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
    <Box sx={{ py: 8 }}>
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
        <Typography variant="h4" fontWeight={700}>
          {project.title}
        </Typography>

        {/* Description */}
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          {project.description}
        </Typography>

        {/* Tech Stack */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
          Tech Stack
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
