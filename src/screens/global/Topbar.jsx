import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Title from "../../components/Title";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("./login");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={1}>
      {/* /* TITLE BAR */}
      <Box>
        <Title title="ONE TAP - ADMIN PANEL" />
      </Box>

      {/* SEARCH BAR
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}

      {/* ICONS */}
      <Box display="flex">
        <Box marginTop={"35%"}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
        <Box marginTop={"35%"}>
          <IconButton onClick={handleButtonClick}>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
