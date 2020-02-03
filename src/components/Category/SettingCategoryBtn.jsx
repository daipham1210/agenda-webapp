import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SettingIcon from 'assets/icons/ellipsis.svg';

function getModalStyle() {
  const top = 20;
  const left = 15;

  return {
    top: `${top}px`,
    left: `${left}%`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SettingCategoryBtn(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [topPos, setTopPos] = React.useState(0);
  let btnSetRef = React.createRef();

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
    props.togglePopup();
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <>
      <button type="button" className='setting-category' ref={btnSetRef}
              onClick={(e) => handleOpen(e)}>
        <img src={SettingIcon} alt='setting' />
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={(e) => handleClose(e)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </>
  );
}