import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>
      <Dialog open={open}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React приложение с использованием Material UI. Вы можете
            настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose}>Согласен</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
