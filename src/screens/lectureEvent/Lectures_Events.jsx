import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const LectureEvent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const addLectureButtonClick = () => {
    navigate("../addLecture");
  };
  const viewLectureButtonClick = () => {
    navigate("../viewLecture");
  };
  const addEventButtonClick = () => {
    navigate("../addEvent");
  };
  const viewEventButtonClick = () => {
    navigate("../viewEvent");
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="LECTURES & EVENTS"
          subtitle="Welcome to Lectures & Events Page"
        />
      </Box>

      {/* BUTTONS */}
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box display="flex" justifyContent="center" margin="5%">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={addLectureButtonClick}
          >
            Add Lecture
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" margin="5%">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={viewLectureButtonClick}
          >
            View Lecture
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        marginTop="0%"
      >
        <Box display="flex" justifyContent="center" margin="5%" marginTop="0%">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={addEventButtonClick}
          >
            Add Event
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" margin="5%" marginTop="0%">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={viewEventButtonClick}
          >
            View Event
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LectureEvent;
