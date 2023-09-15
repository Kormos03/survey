
import './style.css'
function buttonclick()
{
  let name = document.getElementById('name').value;
  let mobile = document.getElementById('mobile').value;
  let age = document.getElementById('age').value;
  let color = document.getElementById('color').value;
  if(!name.includes(' '))
  {
    document.getElementById('error').textContent = 'The name must include a space';
  }
  else if(!mobile.includes('+'))
  {
    document.getElementById('error').textContent ='The mobile number must include a +';
  }
  else if(age < 18)
  {
    document.getElementById('error').textContent = 'You have to be older than 18';
  }
  else if(color == '' || color == ' ')
  {
    document.getElementById('error').textContent = 'Write any color';
  }
  else
  {
    document.getElementById('error').innerHTML = '<p class="text-success">Successful</p>';
  }
}
function init()
{
  document.getElementById('submit').addEventListener('click', buttonclick);
}
document.addEventListener('DOMContentLoaded', init);