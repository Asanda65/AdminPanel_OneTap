import { Box, useTheme, Grid, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const AddStaff = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADD STAFF" subtitle="Welcome to Add Staff Page" />
      </Box>

      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              name="id"
              label="Staff ID"
              placeholder="Enter Staff ID"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="name"
              label="Name"
              placeholder="Enter Name"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              placeholder="Enter Email"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="telNo"
              label="Telephone No"
              placeholder="Enter Telephone No"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="address"
              label="Address"
              placeholder="Enter Address"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="nic"
              label="NIC/Passport No"
              placeholder="Enter NIC/Passport No"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="dob"
              label="Date of Birth"
              placeholder="Enter Date of Birth"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="responsibility"
              label="Responsibility"
              placeholder="Enter Responsibility"
              variant="filled"
              margin="normal"
              fullWidth
            />
          </Grid>          
        </Grid>

        <Box display="flex" flexDirection="row" justifyContent="right">
          <Box display="flex" justifyContent="center" margin="5%" marginY="2%">
            <Button
              type="reset"
              color="secondary"
              variant="contained"
              size="large"
            >
              RESET
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" margin="5%" marginY="2%">
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
      </Box>
    </Box>
  );
};

export default AddStaff;
