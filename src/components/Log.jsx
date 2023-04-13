import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { tokens } from "../theme";

const Log = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 350,
    margin: "20px auto",
    backgroundColor: colors.primary[400],
  };
  const avatarStyle = { backgroundColor: colors.grey[200] };
  const btnStyle = { margin: "8px 0" };

  return (
    <Box>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h3>Admin Login</h3>
          </Grid>
          <TextField
            name="username"
            label="Username"
            placeholder="Enter Username"
            variant="filled"
            margin="normal"
            fullWidth
            required
          />
          <br />
          <TextField
            name="password"
            label="Password"
            placeholder="Enter Password"
            variant="filled"
            type="password"
            fullWidth
            required
          />
          <Box display="flex" justifyContent="center" margin="2%" marginY="8%">
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              style={btnStyle}
              size="large"
            >
              Login
            </Button>
          </Box>

          <Typography align="center">
            <Link href="#" color={"inherit"}>
              Forgot Password?
            </Link>
            <br />
            Don't have an account?
            <Link href="#" color={"inherit"}>
              Register
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Log;
