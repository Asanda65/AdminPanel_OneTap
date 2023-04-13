import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import StatBox from "../components/StatBox";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  Festival,
  PeopleAltOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const studentButtonClick = () => {
    navigate("../student");
  };
  const staffButtonClick = () => {
    navigate("../staff");
  };
  const paymentsButtonClick = () => {
    navigate("../payment");
  };
  const attendanceButtonClick = () => {
    navigate("../attendance");
  };
  const lecturesButtonClick = () => {
    navigate("../lectureEvent");
  };
  const eventsButtonClick = () => {
    navigate("../lectureEvent");
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to the dashboard" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        m={"2%"}
        marginTop={"5%"}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Students"
            icon={
              <PeopleAltOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="center"
            margin="5%"
            marginRight="15%"
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={studentButtonClick}
            >
              View
            </Button>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Staff"
            icon={
              <ContactsOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="center"
            margin="5%"
            marginRight="15%"
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={staffButtonClick}
            >
              View
            </Button>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Payments"
            icon={
              <ReceiptOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="center"
            margin="5%"
            marginRight="15%"
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={paymentsButtonClick}
            >
              View
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        m={"2%"}
      >
        {/* ROW 2 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Attendance"
            icon={
              <BarChartOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="center"
            margin="5%"
            marginRight="15%"
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={attendanceButtonClick}
            >
              View
            </Button>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Lectures"
            icon={
              <CalendarTodayOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="center"
            margin="5%"
            marginRight="15%"
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={lecturesButtonClick}
            >
              View
            </Button>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Events"
            icon={
              <Festival
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="center"
            margin="5%"
            marginRight="15%"
          >
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={eventsButtonClick}
            >
              View
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
