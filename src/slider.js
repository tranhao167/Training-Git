import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';


slider.propTypes = {
    toslides: PropTypes.array,
    onToSlide: PropTypes.func,
  };
  slider.defaultProps = {
    toslides: [],
    onToSlide: null,
  };

function slider(props) {
    const carousel= props.toslides.map((toslide)=>(
        <div key={toslide.SlideID} className="banner_part">
        <img alt="" style={{ height: '100%' }} src={toslide.ImageMain} />
        <div className="textpos">
            <h1>{toslide.Subject}</h1>
          
        </div>
    </div>
   
    ))
    return (
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay transitionTime='500' dynamicHeight={true} showStatus={false}>
                {carousel}
            </Carousel>
    );
}

export default slider;