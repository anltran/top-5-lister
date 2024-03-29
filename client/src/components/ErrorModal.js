import { useContext, useState  } from 'react';
import AuthContext from '../auth'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal() {
  const { auth } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleClose = () => {
    setOpen(false);
    auth.clearErrorMessage();
  }
  if (auth.errorMessage.length !== 0 && !open) {
    setOpen(true);
    setText(auth.errorMessage);
  }

  return (
    <div>
      <Modal
        open={open}
      >
        <Box sx={style}>
          <Alert severity="error">{text}</Alert>
          <Button onClick={handleClose} variant="text">Close</Button>
        </Box>
      </Modal>
    </div>
  );
}