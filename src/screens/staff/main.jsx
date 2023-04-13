import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Staff = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const addButtonClick = () => {
    navigate("../addStaff");
  };
  const viewButtonClick = () => {
    navigate("../viewStaff");
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="STAFF" subtitle="Welcome to Staff Details Page" />
      </Box>

      {/* BUTTONS */}
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box display="flex" justifyContent="center" margin="5%">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={addButtonClick}
          >
            Add Staff
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" margin="5%">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={viewButtonClick}
          >
            View Staff
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
