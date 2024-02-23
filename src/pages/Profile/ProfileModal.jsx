import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Button, IconButton, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateProfileAction } from '../../Redux/Auth/auth.action';
import img from "../static/Logo Harshil.jpeg";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline:"none",
  overFlow:"scroll-y",
  borderRadius:3,
};

export default function ProfileModal({open,handleClose}) {
const dispatch=useDispatch();

const handleSubmit=(values)=>{
    console.log("Values",values);
}
const formik=useFormik({
    initialValues:{
        firstname:"",
        lastname:"",
    },
    onSubmit:(values,)=>{
    console.log("Values",values);
    dispatch(updateProfileAction(values))
    },
})
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
                <div className='flex items-center space-x-3'>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <p>Edit Profile</p>
                </div>
                <Button type='submit'>Save</Button>
            </div>
            <div className='h-[15rem]'>
                <img className='w-full h-full rounded-t-md' src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg" alt="" />
            </div>
            <div className="pl-5">
                <Avatar className='transform -translate-y-24'
                sx={{width:"10rem", height:"10rem"}}
                src={img}
                />
            </div>
            <div className='space-y-3'>
            <TextField
            fullWidth
            id='firstname'
            name='firstname'
            label='First Name'
            value={formik.values.firstname}
            onChange={formik.handleChange}
            />
            <TextField
            fullWidth
            id='lastname'
            name='lastname'
            label='Last Name'
            value={formik.values.lastname}
            onChange={formik.handleChange}
            />
            </div>
         </form>
        </Box>
      </Modal>
    </div>
  );
}