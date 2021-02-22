
export const selectInput = (id) => {
  setTimeout(() => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();

      // move the cursor to the end of the text
      var val = inputElement.value; 
      inputElement.value = ''; 
      inputElement.value = val + ' '; 
      
    }
  }, 200);
};
