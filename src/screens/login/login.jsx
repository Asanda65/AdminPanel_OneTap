import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Log from "../../components/Log";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LOGIN" subtitle="Enter your login details to proceed" />
      </Box>

      <Log />
    </Box>
  );
};

export default Login;
