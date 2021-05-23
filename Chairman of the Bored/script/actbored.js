const endpoint = `https://www.boredapi.com/api/activity`;
const button = document.querySelector('.button');
const form = document.querySelector('#form');
const activityWrapper = document.querySelector('.activity');
const typeWrapper = document.querySelector('.type');
const buttonAfter = document.getElementById("#buttonAfter");
document.querySelector('#buttonAfter').style.display ="none";
document.querySelector('.button').addEventListener('click', showBtn)
function showBtn() {
  document.querySelector('#buttonAfter').style.display = "visible";


}

const changeColor = (type) => {
  switch(type){
    case 'relaxation':
      return 'MEDIUMSLATEBLUE';
      break;
    case 'cooking':
      return 'KHAKI';
      break;
    case 'recreational':
      return `linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)`;
      break;
    case 'social':
      return '#3b5998';
      break;
    case 'music':
      return 'DARKSEAGREEN';
      break;
    case 'busywork':
      return 'CORNFLOWERBLUE';
      break;
    default:
      return 'blue';
  }
}


const getActivity = async (event) => {
 event.preventDefault();
  const response = await fetch(endpoint);
  const json = await response.json();
  const {activity, type} = json;


  activityWrapper.innerHTML= activity;
const Color = changeColor(type);
  button.style.background = Color;


}
form.addEventListener("click", getActivity);


