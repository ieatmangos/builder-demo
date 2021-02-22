
const loadIntersection = (callback) => {

  const existingScript3 = document.getElementById('fade_animation');


  
  if (!existingScript3) {
    const script3 = document.createElement('script');
    script3.src = './intersection.js';
    script3.id = 'fade_animation';
    document.body.appendChild(script3);
    script3.onload = () => { 
      console.log(script3)
      console.log('loaded 33')
    };
  }
  
  if (existingScript3 && callback) callback();

};
export default loadIntersection;

