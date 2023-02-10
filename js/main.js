/** BÀI 1
 * B1: Tạo Ui
 * B2: Lấy dữ liệu từ input
 * B3: Lập công thức
 *       Tổng lương = lương 1 ngày * số ngày làm
 * B4: Thông báo output
 */

var perDay = 100000;
console.log(perDay);
function tongLuong() {
    var day = document.getElementById("soNgay").value;
    var total = perDay * day
    document.getElementById("ketQua1").innerHTML = "Tiền lương của nhân viên là:  " + total.toLocaleString() + " VNĐ";
}

document.getElementById("calc1").onclick = tongLuong;


/** BÀI 2
 * B1: Tạo Ui
 * B2: Lấy dữ liệu từ input
 * B3: Lập công thức
 *       Trung bình = 5 số / 5
 * B4: Thông báo output
 */

function dtb() {
    var num1 = Number(document.getElementById("1st").value);
    var num2 = Number(document.getElementById("2rd").value);
    var num3 = Number(document.getElementById("3th").value);
    var num4 = Number(document.getElementById("4th").value);
    var num5 = Number(document.getElementById("5th").value);
    var total = (num1 + num2 + num3 + num4 + num5) / 5;
    // var average = total / 5;
    document.getElementById("ketQua2").innerHTML = "Trung bình cộng của 5 số là:  " + total.toLocaleString();
}

document.getElementById("calc2").onclick = dtb;

/** BÀI 3
 * B1: Tạo Ui
 * B2: Lấy dữ liệu từ input
 * B3: Lập công thức
 *       Số tiền sau khi quy đổi = 23.500 * Lượng USD
 * B4: Thông báo output
 */

var rate = 23500;
function exchange() {
    var usd = document.getElementById("money").value;
    var total = rate * usd;
    document.getElementById("ketQua3").innerHTML = "Số tiền VNĐ sau khi quy đổi là:  " + total.toLocaleString() + " VNĐ";
}
document.getElementById("calc3").onclick = exchange;

/** BÀI 4
 * B1: Tạo Ui
 * B2: Lấy dữ liệu từ input
 * B3: Lập công thức
 *       Diện tích HCN: Dài * Rộng
 *       Chu vi HCN: (Dài + rộng) * 2
 * B4: Thông báo output
 */

function SC() {
    var length= Number(document.getElementById("cd").value);
    var width= Number(document.getElementById("cr").value);
    var S= length * width;
    var C = (length + width) * 2;
    document.getElementById("ketQua4").innerHTML = "Diện tích hình chữ nhât là:  " + S + "<br> Chu vi hình chữ nhật là:  " + C;
}
document.getElementById("calc4").onclick = SC;

/** BÀI 5
 * B1: Tạo Ui
 * B2: Lấy dữ liệu từ input
 * B3: Lập công thức
 *       Tách phần chục: số / 10 (Lấy phần nguyên)
 *       Tách phần đơn vị: số % 10 (Lấy phần nguyên)
 * B4: Thông báo output
 */

function sum() {
    var num= document.getElementById("so").value
    if (num >= 10 && num <=99) {
       var hangChuc = Math.floor(num / 10); 
       var hangDv = Math.floor(num % 10); 
       var tong= hangChuc + hangDv
       document.getElementById("ketQua5").innerHTML = " Tổng của 2 ký số là:  " + tong;
    } else {
        alert("Nhập số có 2 chữ số nghe ba") ;
    }
}
document.getElementById("calc5").onclick = sum;
