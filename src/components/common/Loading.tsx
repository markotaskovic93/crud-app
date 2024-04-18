import { Box, Typography, CircularProgress } from "@components/ui";

const Loading: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Box textAlign="center">
      <CircularProgress />
      <Typography variant="h6" component="div" mt={2}>
        Loading...
      </Typography>
    </Box>
  </Box>
);

export default Loading;
