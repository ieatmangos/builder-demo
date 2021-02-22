
const loadJquery = (callback) => {
  const existingScript = document.getElementById('jquery');
  const existingScript2 = document.getElementById('menujs');
  // const existingScript3 = document.getElementById('fade_animation');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
    script.id = 'jquery';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
      // console.log('loaded jquery')
    };
  }
  if (existingScript && callback) callback();
  if (!existingScript2) {
    const script2 = document.createElement('script');
    script2.src = 'https://assets.codepen.io/t-1390/sb-menu.js';
    script2.id = 'menujs';
    document.body.appendChild(script2);
    script2.onload = () => { 
      // console.log('loaded menu js')
    };
  }
  // if (!existingScript3) {
  //   const script3 = document.createElement('script');
  //   script3.src = './intersection.js';
  //   script3.id = 'fade_animation';
  //   document.body.appendChild(script3);
  //   script3.onload = () => { 
  //     console.log('loaded 33')
  //   };
  // }
 

};
export default loadJquery;

