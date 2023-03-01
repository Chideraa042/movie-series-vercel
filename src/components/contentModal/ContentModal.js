import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    paper: {
        width: "80%",
        height: "80%",
        backgroundColor: "#39445a",
        border: "1px solid #282c34",
        borderRadius: 10,
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
        marginLeft: '20px',
        marginTop: '10px'
      },
    }));

export const ContentModal = ({children, media_type, id}) => {
  const style = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [content, setContent] = useState();
    const [video, setVideo] = useState();


  const fetchData = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

      setContent(data);
  }

  const fetchVideo = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    // console.log(data)
    setVideo(data.results[0]?.key)
}

useEffect(() => {
  fetchData();
  fetchVideo();
}, [])
    

  return (
    <div>
      <div type='button' className='media' onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={style.paper}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Title:- loading...
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Content:- loading...
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
