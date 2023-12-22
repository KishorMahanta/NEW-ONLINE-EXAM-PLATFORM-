for (let i = 0; i < 5; i++) {
    const answerBtn = document.createElement('button');
    if (i < questions[index].options.length) {
      answerBtn.textContent = questions[index].options[i];
      answerBtn.dataset.answer = questions[index].options[i];
    } else {
      answerBtn.disabled = true; 
      answerBtn.textContent = "-";
    }
    answerChoicesEl.appendChild(answerBtn);
  }

  feedbackEl.classList.add('hidden');
}