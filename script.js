const usernameInput = document.getElementById('username');
const minLengthMsg = document.getElementById('minLength');
const maxLengthMsg = document.getElementById('maxLength');
const validMsg = document.getElementById('valid');

usernameInput.addEventListener('input', () => {
  const val = usernameInput.value;
  
  minLengthMsg.style.display = 'none';
  maxLengthMsg.style.display = 'none';
  validMsg.style.display = 'none';
  
  if(val.length > 0 && val.length < 5){
    minLengthMsg.style.display = 'block';
  } else if(val.length > 10){
    maxLengthMsg.style.display = 'block';
  } else if(val.length >=5 && val.length <=10){
    validMsg.style.display = 'block';
  }
});

document.getElementById('userForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert("Form submitted!");
});
