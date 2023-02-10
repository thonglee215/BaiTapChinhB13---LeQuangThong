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
    var day = Number(document.getElementById("soNgay").value);
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