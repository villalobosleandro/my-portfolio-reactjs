import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import styles from './ModalImagePreview.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalImagePreview = props => {
  const { open, handleClose, setOpen, element } = props;

  return (
    <div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{element.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {element.description}
          </DialogContentText>
          <Carousel
            autoPlay={true}
            showThumbs={false}
          >

            {
              element.images.map((item, index) => (
                  <div key={index} className={styles.imageContainer}>
                    <img src={item} loading="lazy" alt="img2" className={styles.image}/>
                  </div>
              ))
            }

          </Carousel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
