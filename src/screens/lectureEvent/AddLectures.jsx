import { Box, useTheme, Grid, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const AddLecture = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADD LECUTRE" subtitle="Welcome to Add Lecture Page" />
      </Box>

      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} marginLeft={5}>
            <TextField
              name="name"
              label="Lecture Name"
              placeholder="Enter Lecture Name"
              variant="filled"
              margin="normal"
              fullWidth
            />
            <TextField
              name="location"
              label="Location"
              placeholder="Enter Location"
              variant="filled"
              margin="normal"
              fullWidth
            />
            <TextField
              name="time"
              label="Time"
              placeholder="Enter Time"
              variant="filled"
              margin="normal"
              fullWidth
            />
            <TextField
              name="lecturer"
              label="Lecturer"
              placeholder="Enter Lecturer Name"
              variant="filled"
              margin="normal"
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              placeholder="Enter Description"
              variant="filled"
              margin="normal"
              fullWidth
            />
            <Box display="flex" flexDirection="row" justifyContent="right">
              <Box
                display="flex"
                justifyContent="center"
                margin="5%"
                marginY="2%"
              >
                <Button
                  type="reset"
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  RESET
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                margin="5%"
                marginY="2%"
              >
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  ADD
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddLecture;
