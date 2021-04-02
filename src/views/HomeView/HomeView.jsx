import React from 'react';
import defaultPhone from './default-phone.png';
//import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

const styles = {
  container: {
    background: 'rgba(247,243,191,0.5)',
    
  },
  photo: {
    minHeight: 'calc(100vh - 50px)',
    backgroundImage: `url(${defaultPhone})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%', 
  }
};

const HomeView = () => (
  <div style={styles.container}>
  <Zoom in={true} style={{ transitionDelay: true ? '500ms' : '0ms' }}>
  {/* <Slide direction="up" in={true} mountOnEnter unmountOnExit> */}
    <div style={styles.photo}></div>
    {/* </Slide> */}
    </Zoom>
    </div>
);

export default HomeView;