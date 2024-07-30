document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表單提交

    // 獲取所有問題的答案
    let answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked')
    };

    // 檢查是否所有問題都已回答
    for (let key in answers) {
        if (!answers[key]) {
            alert('請回答所有問題');
            return;
        }
        answers[key] = answers[key].value;
    }

    let suggestion = '';

    // 根據回答決定建議
    if (answers.q4 === 'yes') {
        suggestion = '您有身障身份，入園免費。建議兌換2張手作體驗券，深度體驗傳統工藝之美！';
    } else if (answers.q5 === 'yes') {
        suggestion = '您有敬老身份，建議兌換2張入園門票，充分享受園區的各項設施和活動。';
    } else {
        if (answers.q2 === 'crafting' || answers.q3 === 'crafts') {
            suggestion = '建議兌換1張入園門票+1張手作體驗券，您可以親身體驗傳統工藝的魅力。';
        } else if (answers.q1 === 'outdoor' || answers.q3 === 'nature') {
            suggestion = '建議兌換2張入園門票，您可以充分探索園區的自然景觀和戶外活動。';
        } else if (answers.q2 === 'exhibiting') {
            suggestion = '建議兌換2張入園門票，您可以仔細欣賞園區內的各種展覽。';
        } else {
            suggestion = '建議兌換1張入園門票+1張手作體驗券，這樣您既可以參觀園區，也可以體驗傳統工藝。';
        }
    }

    // 顯示建議結果
    document.getElementById('suggestion').innerHTML = `<h2>專屬於您的傳藝處方箋:</h2><p>${suggestion}</p>`;
});
