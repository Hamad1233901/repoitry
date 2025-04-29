let c = () => {
    let val = document.getElementById('baggage').value;
    if (parseInt(val) > 15) {
        alert('Baggage is overweight');
    }
}