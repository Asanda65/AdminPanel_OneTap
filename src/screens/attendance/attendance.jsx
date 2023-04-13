import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Attendance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("../viewStudent");
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ATTENDANCE" subtitle="Welcome to Attendance Page" />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="center" margin={'5%'}>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={handleButtonClick}
        >
          Search Student
        </Button>
      </Box>
    </Box>
  );
};

export default Attendance;
