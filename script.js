document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let senior = document.querySelector('input[name="senior"]:checked').value;
    let preference = document.querySelector('input[name="preference"]:checked').value;

    let suggestion = '';

    if (senior === 'yes') {
        suggestion = '建議兌換2張入園門票';
    } else {
        if (preference === 'crafting') {
            suggestion = '建議兌換1張入園門票+1張手作券';
        } else if (preference === 'exhibiting') {
            suggestion = '建議兌換2張入園門票';
        }
    }

    alert(`專屬於您的傳藝處方箋: ${suggestion}`);
});
