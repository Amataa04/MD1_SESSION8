let physics = window.prompt("Nhập điểm môn vật lý");
let chemistry = window.prompt("Nhập điểm môn hóa học");
let biology = window.prompt("Nhập điểm môn sinh học");

const Avg = (parseFloat(physics) + parseFloat(chemistry) + parseFloat(biology)) / 3;

document.write(Avg);