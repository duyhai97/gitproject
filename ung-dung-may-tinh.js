function ketqua(type) {
    let sothunhat = document.getElementById('AA').value;
    let sothuhai = document.getElementById('BB').value;
    let convert;

    if (type === 'cong') {
        convert = parseInt(sothunhat) + parseInt(sothuhai);
    } else if (type === 'tru') {
        convert = parseInt(sothunhat) - parseInt(sothuhai);
    } else if (type === 'nhan') {
        convert = parseInt(sothunhat) * parseInt(sothuhai);

    } else {
        convert = parseInt(sothunhat) / parseInt(sothuhai);
    }

    document.getElementById('result').innerHTML = 'Result: ' + convert;

}

