import { getSlider } from 'simple-slider/';


 
getSlider({
    container: document.getElementById('myslider'),
    init: -100,
      show: 0,
      end: 100,
      unit: '%'
  });


  getSlider({
    container: document.getElementById('myslider2'),
    prop: 'left',
    init: -612,
    show: 0,
    end: 612,
    unit: 'px'
  });

  
