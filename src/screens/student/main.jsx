import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const addButtonClick = () => {
    navigate("../addStudent");
  }
  const viewButtonClick = () => {
    navigate("../viewStudent");
  };


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="STUDENT" subtitle="Welcome to Student Details Page" />
      </Box>

      {/* BUTTONS */}
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box display="flex" justifyContent="center" margin="5%">
          <Button type="submit" color="secondary" variant="contained" onClick={addButtonClick}>
            Add Student
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" margin="5%">
          <Button type="submit" color="secondary" variant="contained" onClick={viewButtonClick}>
            View Student
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Student;