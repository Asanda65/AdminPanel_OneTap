import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Title = ({title}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "25px 0px 0px 15px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
