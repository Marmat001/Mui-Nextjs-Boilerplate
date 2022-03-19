import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkButton from "../components/LinkButton";

function HomePage(props) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home Page
        </Typography>
        <LinkButton href="/about" variant="contained" color="secondary">
          Go to about page
        </LinkButton>
      </Box>
    </Container>
  );
}

export default HomePage;
