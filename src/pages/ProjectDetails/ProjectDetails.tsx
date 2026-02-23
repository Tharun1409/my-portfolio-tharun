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
      py: { xs: 6, md: 10 },
    }}
  >
    <Container maxWidth="md">
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
          mb: 5,
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        Back to Projects
      </Button>

      {/* Title */}
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
          mb: 3,
          fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" },
          lineHeight: 1.2,
        }}
      >
        {project.projectTitle}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: 1.8,
          mb: 6,
        }}
      >
        {project.description}
      </Typography>

      {/* Divider Card Section */}
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ mb: 3 }}
        >
          Tech Stack
        </Typography>
<Box sx={{ mt: 6 }}>
  <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
    Key Contributions
  </Typography>

  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
    {project.contributions.map((c, i) => (
      <p key={i}>{c}</p>
    ))}
  </Typography>
</Box>
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
                borderRadius: 2,
                fontWeight: 500,
                backgroundColor: "action.hover",
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
