// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex : 0
    }
  }

  render() {
<<<<<<< HEAD
    const sms =       `I am on slide ${this.state.currentSlideIndex}`;

    return (
      <div>
      {sms}
=======
    return (
      <div>
      I am on slide {this.state.currentSlideIndex};
>>>>>>> 18e5dd176e91def7fdc96620925ffc616f05954a
      </div>
    )
  }
}
<<<<<<< HEAD
=======

>>>>>>> 18e5dd176e91def7fdc96620925ffc616f05954a
