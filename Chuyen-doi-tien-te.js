function chuyendoi() {
    let money = document.getElementById('money').value;
    let dauVao = document.getElementById("so-tien").value;
    let daura;
    if (money ===  'USD') {
        daura = dauVao*1/23000;
    } else {
        daura=dauVao*1/30000;
    }
    document.getElementById('result').innerHTML = 'Result: ' + daura;

}