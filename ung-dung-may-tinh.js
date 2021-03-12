function ketqua(type) {
    let sothunhat = +document.getElementById('AA').value;
    let sothuhai = +document.getElementById('BB').value;
    let convert;

    if (type === 'cong') {
        convert = sothunhat + sothuhai;
    } else if (type === 'tru') {
        convert =sothunhat -sothuhai;
    } else if (type === 'nhan') {
        convert = sothunhat * sothuhai;

    } else {
        convert = sothunhat / sothuhai;
    }

    document.getElementById('result').innerHTML = 'Result: ' + convert;

}

