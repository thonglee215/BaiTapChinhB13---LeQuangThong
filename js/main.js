/** BÀI 1
 * Khối 1: Input
 *      day   
 *   
 * Khối 2: Các bước xử lý
 *  B1: Lấy giá trị từ form khi người dùng click button
 *      + Tạo hàm tongLuong
 *  B2: Trong hàm tongLuong
 *      + DOM tới thẻ cần lấy dữ liệu của form và lấy value
 *  B3: Lập công thức
 *       total = 10000 * day
 * 
 * Khối 3: Thông báo output
 *      total
 */

function tongLuong() {
    var day = document.getElementById("soNgay").value;
    var total = 10000 * day
    document.getElementById("ketQua1").innerHTML = "Tiền lương của nhân viên là:  " + total.toLocaleString() + " VNĐ";
}

document.getElementById("calc1").onclick = tongLuong;


/** BÀI 2
 * Khối 1: Input
 *      num1, num2, num3, num4, num5  
 * 
 * Khối 2: Các bước xử lý
 *  B1: Lấy giá trị từ form khi người dùng click button
 *      + Tạo hàm tb
 *  B2: Trong hàm tb
 *      + DOM tới thẻ cần lấy dữ liệu của form và lấy value
 *  B3: Lập công thức
 *       average = (num1 + num2 + num3 + num4 + num5 ) / 5
 * 
 * Khối 3: Thông báo output
 *      average
 */

function tb() {
    var num1 = Number(document.getElementById("1st").value);
    var num2 = Number(document.getElementById("2rd").value);
    var num3 = Number(document.getElementById("3th").value);
    var num4 = Number(document.getElementById("4th").value);
    var num5 = Number(document.getElementById("5th").value);
    var average = (num1 + num2 + num3 + num4 + num5) / 5;
    // var average = total / 5;
    document.getElementById("ketQua2").innerHTML = "Trung bình cộng của 5 số là:  " + average.toLocaleString();
}

document.getElementById("calc2").onclick = tb;

/** BÀI 3
 * Khối 1: Input
 *      usd  
 * 
 * Khối 2: Các bước xử lý
 *  B1: Lấy giá trị từ form khi người dùng click button
 *      + Tạo hàm exchange
 *  B2: Trong hàm exchange
 *      + DOM tới thẻ cần lấy dữ liệu của form và lấy value
 *  B3: Lập công thức
 *       total = 23500 * usd
 * 
 * Khối 3: Thông báo output
 *      total
 */

function exchange() {
    var usd = document.getElementById("money").value;
    var total = 235000 * usd;
    document.getElementById("ketQua3").innerHTML = "Số tiền VNĐ sau khi quy đổi là:  " + total.toLocaleString() + " VNĐ";
}
document.getElementById("calc3").onclick = exchange;

/** BÀI 4
 * Khối 1: Input
 *      length, width  
 * 
 * Khối 2: Các bước xử lý
 *  B1: Lấy giá trị từ form khi người dùng click button
 *      + Tạo hàm SC
 *  B2: Trong hàm SC
 *      + DOM tới thẻ cần lấy dữ liệu của form và lấy value
 *  B3: Lập công thức
 *       S = length * width
 *       C = (length + width) * 2
 * 
 * Khối 3: Thông báo output
 *      S, C
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
 * Khối 1: Input
 *      num  
 * 
 * Khối 2: Các bước xử lý
 *  B1: Lấy giá trị từ form khi người dùng click button
 *      + Tạo hàm sum
 *  B2: Trong hàm sum
 *      + DOM tới thẻ cần lấy dữ liệu của form và lấy value
 *  B3: Lập công thức
 *       hangChuc = Math.floor(num / 10)
 *       hangDv = Math.floor(num % 10)
 *       tong = hangChuc + hangDv
 * Khối 3: Thông báo output
 *      tong
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
