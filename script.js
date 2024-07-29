function submitQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {
        q1: formData.get('q1'),
        q2: formData.get('q2'),
        q3: formData.get('q3'),
        q4: formData.get('q4'),
        q5: formData.get('q5')
    };

    let result = '';

    if (answers.q4 === 'yes') {
        result = '建議兌換手作體驗券，適合深入體驗傳統工藝！';
    } else if (answers.q5 === 'yes') {
        result = '建議兌換2張入園門票，方便進行園區參觀！';
    } else {
        if (answers.q1 === 'indoor' && answers.q2 === 'hands-on') {
            result = '建議兌換2張手作體驗券，適合喜愛動手製作的參觀者！';
        } else if (answers.q1 === 'outdoor' && answers.q3 === 'group') {
            result = '建議兌換2張入園門票，適合全家出遊！';
        } else {
            result = '建議兌換1張入園門票 + 1張手作體驗券，適合希望同時參觀和體驗的參觀者！';
        }
    }

    document.getElementById('result').innerHTML = `<h2>您的建議：</h2><p>${result}</p>`;
}
