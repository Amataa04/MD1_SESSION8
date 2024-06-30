let width = window.prompt("Nhập chiều rộng");
let height = window.prompt("Nhập chiều dài");

const C = (parseFloat(width) + parseFloat(height)) * 2;
const S = parseFloat(width) * parseFloat(height)

document.write("Chu vi: " + C + " ");
document.write("Diện tích: " + S);