import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, ListItemButton, ListItemIcon } from '@mui/material';
import { AccountCircle, EditOutlined } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editContact, setEditContact] = useState(null);

  const toggleModal = editContanct => {
    setIsOpen(isOpen => !isOpen);
    setEditContact(editContanct);
  };

  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectors.selectFilteredContacts);

  const onRemoveContact = id => {
    dispatch(operations.deleteContact(id));
  };

  return (
    <div>
      <List dense={true}>
        {filteredContacts.map(item => {
          return (
            <ListItem key={item.id} sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                className={css.contactItem}
                sx={{ flexGrow: 2, flexBasis: '100%' }}
                primary={item.name}
                secondary={true ? `${item.number}` : null}
              />
              <ListItemButton disableGutters>
                <ListItemIcon sx={{ marginLeft: '15px' }}>
                  <EditOutlined onClick={() => toggleModal(item)} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon sx={{ marginLeft: '10px' }}>
                  <DeleteIcon onClick={() => onRemoveContact(item.id)} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          {editContact && (
            <ContactForm
              editContact={editContact}
              closeEditModal={() => setIsOpen(false)}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ContactList;
