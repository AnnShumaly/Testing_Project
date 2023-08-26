import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#e74b7e" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="#0000"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <section className="section">
          <div style={{ width: "100%", height: "100%" }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "50px",
                color: "black",
                marginLeft: "50px",
              }}
            >
              Welcome To My Testing Website
            </h1>
          </div>
        </section>
      </Box>
    </div>
  );
};

export default HomePage;
