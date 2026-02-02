let username = "admin";
let password = "12345";
let loginCount = 0;
let isLogin = false;
while (loginCount < 3) {
    let inputUser = prompt("Nhập tài khoản:");
    let inputPass = prompt("Nhập mật khẩu:");
    if (inputUser !== username && inputPass !== password) {
        console.log("Sai Cả Tài Khoản Và Mật khẩu");
    } else if (inputPass !== username) {
        console.log("Sai Tài khoản");
    } else if (inputPass !== password) {
        console.log("Sai Mật khẩu");
    } else {
        console.log("Đăng nhập thành công!");
        isLogin = true;
        break;
    }
    loginCount++;
}
if (!isLogin) {
    console.log("Tài khoản đã bị khóa");
} else if (isLogin) {
    let choice = 0;
    while (choice !== 5) {
        console.log(`
===== MENU =====
1. Phân loại mã số sách
2. Thiết kế sơ đồ kho sách
3. Dự toán phí bảo trì sách
4. Tìm mã số sách may mắn
5. Thoát
        `);
        choice = parseInt(prompt("Chọn chức năng:"));
        switch (choice) {
            case 1: {
                let total = 0;
                let even = 0;
                let odd = 0;
                while (true) {
                    let num = parseInt(prompt("Nhập mã sách (0 để dừng):"));
                    if (num === 0) break;
                    total++;
                    if (num % 2 === 0) even++;
                    else odd++;
                }
                console.log("Tổng số mã sách:", total);
                console.log("Sách khoa học (chẵn):", even);
                console.log("Sách nghệ thuật (lẻ):", odd);
                break;
            }
            case 2: {
                let rows = parseInt(prompt("Nhập số hàng:"));
                let cols = parseInt(prompt("Nhập số cột:"));
                for (let i = 1; i <= rows; i++) {
                    let line = "";
                    for (let j = 1; j <= cols; j++) {
                        if (i === j) {
                            line += `[${i}-${j}] (Kệ ưu tiên) `;
                        } else {
                            line += `[${i}-${j}] `;
                        }
                    }
                    console.log(line);
                }
                break;
            }
            case 3: {
                let bookCount = parseInt(prompt("Nhập số lượng sách:"));
                let cost = parseFloat(prompt("Nhập phí bảo trì 1 cuốn (đ):"));
                let years = parseInt(prompt("Nhập số năm dự toán:"));
                for (let i = 1; i <= years; i++) {
                    let totalCost = bookCount * cost;
                    console.log(`Năm ${i}: ${totalCost} đ`);
                    cost *= 1.1;
                }
                break;
            }
            case 4: {
                let N = parseInt(prompt("Nhập N:"));
                let count = 0;
                let list = "";
                for (let i = 1; i <= N; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        list += i + " ";
                        count++;
                    }
                }
                console.log("Các mã sách may mắn:", list);
                console.log("Tổng số mã:", count);
                break;
            }
            case 5:
                console.log("Hệ thống đang đăng xuất...");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    }
}