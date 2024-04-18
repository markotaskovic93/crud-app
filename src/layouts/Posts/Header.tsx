import { Box, Button } from "@components/ui"
import { useLocation, useNavigate } from "react-router-dom"
import { ROUTES } from "../../router";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCreatePostRoute = location.pathname === ROUTES.POST_CREATE;
  const isHomeRoute = location.pathname === ROUTES.ROOT;

  const handlePageRedirect = (): void => {
    navigate(ROUTES.POST_CREATE);
  }

  const handleBackToHome = ():void => {
    navigate(ROUTES.ROOT);
  }
  
  return (
    <Box 
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      padding="25px"
    > 
      { !isHomeRoute && (
        <Button
          variant="contained"
          onClick={handleBackToHome}
          style={{ marginRight: '10px' }}
        >
          Back to Home
        </Button>
      ) }
      
      { !isCreatePostRoute && (
        <Button 
          variant="contained"
          onClick={handlePageRedirect}
        >
          Create Post
        </Button>
      ) }
    </Box>
  )
}

export default Header;
