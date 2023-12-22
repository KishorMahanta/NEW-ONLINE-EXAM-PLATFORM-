const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert('Please select an answer before submitting.');
    return;
  }



  const correctAnswer = 'Dennis ritchie';
  if (selectedAnswer.value === correctAnswer) {
    alert('You answered correctly!');
  } else {
    alert('Sorry, your answer is incorrect. The correct answer is ' + correctAnswer + '.');
  };

  submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert('Please select an answer before submitting.');
    return;
  }


const correctAnswer2 = 'int $main';
  if (selectedAnswer.value === correctAnswer) {
    alert('You answered correctly!');
  } else {
    alert('Sorry, your answer is incorrect. The correct answer is ' + correctAnswer + '.');
  };

  submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
  if (!selectedAnswer) {
    alert('Please select an answer before submitting.');
    return;
  }


  const correctAnswer3 = 'None of the mentioned';
  if (selectedAnswer.value === correctAnswer) {
    alert('You answered correctly!');
  } else {
    alert('Sorry, your answer is incorrect. The correct answer is ' + correctAnswer + '.');
  };

  submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert('Please select an answer before submitting.');
    return;
  }


  const correctAnswer4 = 'LowerCase letters';
  if (selectedAnswer.value === correctAnswer) {
    alert('You answered correctly!');
  } else {
    alert('Sorry, your answer is incorrect. The correct answer is ' + correctAnswer + '.');
  };

  submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert('Please select an answer before submitting.');
    return;
  }


  const correctAnswer5 = 'True';
  if (selectedAnswer.value === correctAnswer) {
    alert('You answered correctly!');
  } else {
    alert('Sorry, your answer is incorrect. The correct answer is ' + correctAnswer + '.');
  }});