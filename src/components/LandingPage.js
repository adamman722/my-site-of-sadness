import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import "./landing_page_styles/styles.css";
import logo from "../assets/Img/MyLogo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowUpawrd from "@mui/icons-material/ArrowUpward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import "./landingPageStyles.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: "10px",
    justifyContent: "center",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#B388EB",
  borderBottom: "2px solid black",
  boxShadow: "none",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: "66px",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",

        minHeight: "100vh",
      }}
    >
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Container maxWidth="false">
            <Stack
              direction="row"
              spacing={5}
              justifyContent="space-between"
              flexShrink="1"
            >
              <h2 className="title-of-site">My Simple site of sadness</h2>

              <nav>
                {[
                  "Home",
                  "About Me",
                  "My work",
                  "Simple Components",
                  "Contact me",
                  "This new one added",
                  "Resources",
                ].map((text, index) => (
                  <Link
                    to={text === "Home" ? "/" : text}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: "auto",
                      padding: "0px",
                    }}
                    className="Cheese"
                  >
                    <p>{text}</p>
                  </Link>
                ))}
              </nav>
            </Stack>
          </Container>
          <IconButton
            className="dropdown-menu"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 0, ...(open && { display: "none" }) }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          border: "none",
          "& .MuiDrawer-paper": {
            //add color here for the whole thing

            borderBottom: "2px solid black",
            width: -drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="top"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "hotpink",
            borderBottom: "2px solid black",
            minHeight: "66px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>My Simple site of Sadness</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ArrowUpawrd /> : <ArrowUpawrd />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ color: "black" }} />
        <List>
          {["Home", "About Me"].map((text, index) => (
            <Link
              to={text === "Home" ? "/" : text}
              style={{ textDecoration: "none", color: "hotpink" }}
              onClick={handleDrawerClose}
            >
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider sx={{ borderColor: "black", borderWidth: "1px" }} />
        <List>
          {["My work", "Simple Components", "Contact me", "Resources"].map(
            (text, index) => (
              <Link
                to={text}
                style={{ textDecoration: "none", color: "hotpink" }}
                onClick={handleDrawerClose}
              >
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Drawer>
      {/* <DrawerHeader /> */}
      {/* My elements goe here */}
      <Main
        open={open}
        sx={{
          background:
            "radial-gradient(circle, rgba(179,136,235,0.5986078886310905) 0%, rgba(247,174,248,0.5986078886310905) 63%, rgba(255,255,255,1) 83%)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          minHeight: "100%",
        }}
      >
        {/* This is where other components get outputted */}
        <Outlet />
      </Main>
    </Box>
  );
}
