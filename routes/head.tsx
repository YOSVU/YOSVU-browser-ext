import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Title } from "@mui/icons-material";

export const HeadBar = () => {

  const navigation: NavigateFunction = useNavigate()

  const onAboutPage = (): void => {
    navigation("/about")
  }
  const onHomePage = (): void => {
    navigation("/")
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Title>Youth Open Source Virtual University</Title>
          <Button onClick={onHomePage} color="inherit">首页</Button>
          <Button onClick={onAboutPage} color="inherit">关于</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
  }