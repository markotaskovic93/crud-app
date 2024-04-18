import { Typography, Box } from "@components/ui";


const NoResults: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Typography variant="h5" component="div">
      No Results
    </Typography>
  </Box>
);

export default NoResults;
