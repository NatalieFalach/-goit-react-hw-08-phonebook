import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

export default function Popup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return <div></div>;
}
