document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表單提交

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    // 確保所有問題都被回答
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert('請回答所有問題');
        return;
    }

    q1 = q1.value;
    q2 = q2.value;
    q3 = q3.value;
    q4 = q4.value;
    q5 = q5.value;

    let suggestion = '';

    if (q5 === 'yes') {
        suggestion = '建議兌換2張入園門票';
    } else if (q4 === 'yes') {
        suggestion = '建議兌換1張入園門票+1張手作券';
    } else {
        if (q2 === 'crafting') {
            suggestion = '建議兌換1張入園門票+1張手作券';
        } else if (q2 === 'exhibiting') {
            suggestion = '建議兌換2張入園門票';
        }
    }

    alert(`專屬於您的傳藝處方箋: ${suggestion}`);
});
