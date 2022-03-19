import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkButton from "../components/LinkButton";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Page
        </Typography>

        <LinkButton href="/" variant="contained" color="primary">
          Go to home page
        </LinkButton>
      </Box>
    </Container>
  );
}
