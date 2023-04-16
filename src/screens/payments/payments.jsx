import { Box, useTheme, IconButton, Grid, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Payment = () => {
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
        <Header title="PAYMENT" subtitle="Welcome to Payments Page" />
      </Box>

      <Typography marginLeft="3%">Search for Student ID to proceed</Typography>

      {/* SEARCH BAR and ICON BUTTON*/}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          margin="2%"
          marginLeft="5%"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default Payment;
