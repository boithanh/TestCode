// let sinhvien = new SinhVien;
// console.log(sinhvien);


let arrSinhVien = getLocalStorage();
renderArrSinhVien();

// Thêm sinh viên
let formQLSV = document.getElementById("formQLSV");
formQLSV.onsubmit = function (event) {
    event.preventDefault();
    let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
    let sinhVien = new SinhVien();
    for (let field of arrField) {
        //Destructuring
        let { id, value } = field;
        // let sv = sinhvien[field.id] = field.value;
        // console.log(sv);
        sinhVien[id] = value;
    }
    arrSinhVien.push(sinhVien);
    //Lưu trữ mảng đã được thêm phần tử
    saveLocalStorage();
    // console.log(arrSinhVien);
    //Hiển thị dữ liệu từ mảng lên giao diện
    renderArrSinhVien(arrSinhVien);
    formQLSV.reset();
}

//Hiển thị  dữ liệu trong mảng lên giao diện
function renderArrSinhVien(arr = arrSinhVien) {
    let content = "";
    for (let sinhVien of arr) {
        let newSinhVien = new SinhVien();
        Object.assign(newSinhVien, sinhVien);
        //2 console cho ta thấy được sự khác nhau giữa Data load từ local lên bị mất đi phương thức tính điểm trung bình vì local storage ko lưu trữ phương thức
        console.log(newSinhVien);
        console.log(sinhVien);
        let { txtMaSV, txtTenSV, txtEmail, txtNgaySinh, khSV } = newSinhVien;
        let diemTrungBinh = newSinhVien.tinhDiemTrungBinh();
        // console.log(sinhVien);
        // Cách 1:  Gọi đến từng thuộc tính để fill dữ liệu VD: sinhvien.txtmaSV => sẽ gọi nhiều lần đối tượng sinh viên dẫn đến phải gõ đi gõ lại 1 biến k chuyên nghiệp)
        //Cách 2: Bóc tách dữ liệu bằng destructuring: sẽ gọi thẳng đến thuộc tính đó trong Object, Dữ liệu sẽ dễ nhìn hơn và trông chuyên nghiêp hơn
        //Destructuring sẽ tạo 1 biến mới trùng với tên thuộc tính trong lớp đối tượng 
        //Riêng phương thức tinhDiemtrungbinh ko nên bóc tách vì nó là phương thức, bên trong còn có hàm, các con trỏ this tự kế thừa thuộc tính nên gán vào biến bóc tách bình thường sẽ dẫn đến lỗi hoặc ctrinh chạy sai.
        //Hương xử lý: Chỉ nên tạo biến và hứng lại giá trị trả về từ phương thức đó của đối tượng SinhVien
        content += `
<tr>
  <td>${txtMaSV}</td>
  <td>${txtTenSV}</td>
  <td>${txtEmail}</td>
  <td>${txtNgaySinh}</td>
  <td>${khSV}</td>
  <td>${diemTrungBinh.toFixed(2)}</td>
  <td><button class="btn btn-danger">Xóa</button>
<button class="btn btn-warning">Sửa</button></td>
</tr>`
    }
    document.getElementById("tbodySinhVien").innerHTML = content;
}


// Thực hiện lưu trữ localStorage
//Strick: truyền 2 tham số key và value. Với value là mảng arrSinhVien để khi gọi hàm , hàm đã có dữu liệu chạy , ko cần phải truyền tham số lung tung nửa

function saveLocalStorage(key = "arrSinhVien", value = arrSinhVien) {
    let stringJon = JSON.stringify(value);
    localStorage.setItem(key, stringJon);
}


//Thực hiện lấy dữ liệu từ localStorage
function getLocalStorage(key = "arrSinhVien") {
    let dataLocal = localStorage.getItem(key);
    let newDataLocal = JSON.parse(dataLocal);
    return newDataLocal ? newDataLocal : [];

}
// getLocalStorage(); --> ko cần gọi bên dưới vì theo logic khi reload trang sẽ check xem bên dưới loca có data ko ,nếu có thì lấy nếu ko thì khởi tạo 1 mảng rỗng arrSinhVien 








// //Tham trị lưu dễ dàng
// localStorage.setItem("hoTen", "Bối Thạnh");

// //Tham chiếu như dạng Object, khi lưu trực tiếp nó sẽ không biết kiểu dữ liệu như nào và trả vè [object object]

// let sinhVienThanh = {
//     hoTen: "Bối Thạnh",
//     khoaHoc: "BCS12",
//     namSinh: "1994",
//     sDT: "0786010285"
// }
// let sinhvienThanhJson = JSON.stringify(sinhVienThanh);
// localStorage.setItem("DATASVTHANH", sinhvienThanhJson);


// let arrNumber = [21, 45, 33];

// let arrNumberJson = JSON.stringify(arrNumber);
// localStorage.setItem("arrNumber", arrNumberJson);


// let localThanh = localStorage.getItem("DATASVTHANH");
// let convertLocalThanh = JSON.parse(localThanh);
// console.log(localThanh);

// // Lấy dữ liệu từ local storage
// let localArrnumber = localStorage.getItem("arrNumber");
// let conVertArrNumber = JSON.parse(localArrnumber);
// console.log(conVertArrNumber);


// //Xóa local Storage
// localStorage.removeItem("DATASVTHANH");
// localStorage.removeItem("arrNumber");
// localStorage.removeItem("KhoaHoc");



