const userName = document.querySelector('#name-input');
const userNameSpan = document.querySelector('#name-output');

userName.addEventListener('input', function () {
  const name = userName.value.trim();
  userNameSpan.textContent = name === '' ? 'Anonymous' : name;
});
