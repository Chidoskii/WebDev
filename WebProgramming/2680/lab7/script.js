window.onload = function () {
  document.getElementById('userInput').focus();
};

function generateMultiples() {
  let base = parseInt(this.value);
  // REMOVE CLASS FOR ERROR MESSAGES
  document.getElementById('multiples').classList.remove('prompt');
  document.getElementById('multiples').classList.remove('error');
  // ASK USER TO ENTER A NUMBER
  if (this.value === '') {
    document.getElementById('multiples').innerHTML =
      '<p class="warning">Please enter a number</p>';
    document.getElementById('multiples').classList.add('prompt');
    return;
  }
  // ASK FOR VALID NUMBER
  if (isNaN(base)) {
    document.getElementById('multiples').innerHTML =
      '<p class="warning">Enter a valid number</p>';
    document.getElementById('multiples').classList.add('error');
    return;
  } else {
    document.getElementById('multiples').innerHTML = '';
  }

  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      document.getElementById('multiples').innerHTML +=
        '<p class="a">' + nums[i] * base + '</p>';
    } else {
      document.getElementById('multiples').innerHTML +=
        '<p class="b">' + nums[i] * base + '</p>';
    }
  }
}

// WAIT FOR THE PAGE TO LOAD BEFORE ADDING LISTENERS
window.addEventListener('load', function () {
  document
    .getElementById('userInput')
    .addEventListener('keyup', generateMultiples);
});
