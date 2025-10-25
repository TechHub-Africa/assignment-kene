const button = document.getElementById('toggled_button');
if (button){
button.addEventListener('click', () => {
    button.classList.toggle('toggled');
});
} 
else {
    console.error('not found');
}