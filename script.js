document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;
    let q4 = document.querySelector('input[name="q4"]:checked').value;
    let q5 = document.querySelector('input[name="q5"]:checked').value;

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
