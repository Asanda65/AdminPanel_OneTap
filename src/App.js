import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./screens/global/Sidebar";
import Dashboard from "./screens/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./screens/login/login";
import Student from "./screens/student/main";
import AddStudent from "./screens/student/AddStudent";
import ViewStudent from "./screens/student/ViewStudent";
import Staff from "./screens/staff/main";
import AddStaff from "./screens/staff/AddStaff";
import ViewStaff from "./screens/staff/ViewStaff";
import Payment from "./screens/payments/payments";
import Attendance from "./screens/attendance/attendance";
import LectureEvent from "./screens/lectureEvent/Lectures_Events";
import AddEvent from "./screens/lectureEvent/AddEvents";
import AddLecture from "./screens/lectureEvent/AddLectures";
import ViewEvent from "./screens/lectureEvent/ViewEvents";
import ViewLecture from "./screens/lectureEvent/ViewLectures";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />              
              <Route path="/login" element={<Login/>}/>
              <Route path="/student" element={<Student />} />              
              <Route path="/AddStudent" element={<AddStudent />} /> 
              <Route path="/ViewStudent" element={<ViewStudent />} /> 
              <Route path="/staff" element={<Staff />} /> 
              <Route path="/AddStaff" element={<AddStaff />} /> 
              <Route path="/ViewStaff" element={<ViewStaff />} /> 
              <Route path="/Payment" element={<Payment />} /> 
              <Route path="/Attendance" element={<Attendance />} /> 
              <Route path="/LectureEvent" element={<LectureEvent />} />   
              <Route path="/AddEvent" element={<AddEvent />} />   
              <Route path="/AddLecture" element={<AddLecture />} />          
              <Route path="/ViewEvent" element={<ViewEvent />} />
              <Route path="/ViewLecture" element={<ViewLecture />} />               
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
