// //Call back function
// function tinhDiemTrungBinh(chucNang) {
//     let diemToan = 9;
//     let diemLy = 7;
//     let diemHoa = 5;
//     let diemTrungBinh = (diemToan + diemLy + diemHoa) / 3;
//     chucNang(diemTrungBinh);
// }


// function xepLoaiSinhVien(diemTrungBinh) {
//     if (diemTrungBinh > 7) {
//         console.log("sinh viên giỏi");
//     } else {
//         console.log("Sinh viên khá");

//     }
// }

// function hienThiThongBao(diemTrungBinh) {
//     console.log(`điểm của thí sinh là: ${diemTrungBinh}`);
// }
// // tinhDiemTrungBinh(() => {
// //     console.log("do ngoc");
// // });

// tinhDiemTrungBinh(xepLoaiSinhVien);
// tinhDiemTrungBinh(hienThiThongBao);


arrDienVien = ["Kim Chi", "Thanh Sang", "Vin Râu", "Cổ Thiên Lạc"];
// console.log(arrDienVien);

// function fakeMap(chucNang) {
//     let newArrDienVien = [];
//     for (let i = 0; i < arrDienVien.length; i++) {
//         let newDienVien = chucNang(arrDienVien[i], i);
//         newArrDienVien.push(newDienVien);
//     }
//     return newArrDienVien;
// }

// function phanLoaiDienVien(newDienVien) {
//     return `Diễn viên: ${newDienVien}`
// }

// let newArrr = fakeMap((item, index) => {
//     return `Diễn viên ${item}`
// });
// console.log(fakeMap(phanLoaiDienVien));

// document.querySelector(".glowing-border").innerHTML += fakeMap(phanLoaiDienVien);


let arrChampion = [
    {
        hoTen: "Garden",
        tanCong: 9,
        giap: 55,
        khangPhep: 40
    },
    {
        hoTen: "Kaisa",
        tanCong: 80,
        giap: 30,
        khangPhep: 35
    },
    {
        hoTen: "Jhin",
        tanCong: 109,
        giap: 35,
        khangPhep: 3
    }
]


function fakeFilter(chucnang) {
    let newArrChampion = [];
    for (let index in arrChampion) {
        let isValid = chucnang(arrChampion[index], index);
        if (isValid) {
            newArrChampion.push(arrChampion[index]);
        }
    }
    return newArrChampion;

}

function kiemTraTanCong(item, index) {
    //Kiểm tra nếu tấn công > 80 sẽ nhận vào mảng mới
    return item.tanCong > 80;
}


function kiemTraKhangPhep(item, index) {
    //Kiểm tra nếu tấn công > 80 sẽ nhận vào mảng mới
    return item.khangPhep > 30;
}


let newArrChampion = fakeFilter(kiemTraTanCong);
console.log(newArrChampion);

let newChampion2 = fakeFilter(kiemTraTanCong);
console.log(newChampion2);


class XeHoi {
    //thuộc tính
    tenXe = "Merc S860";
    loaiXe = "S-Class";
    giaTien = "12000";
    mauSac = "Trang";
    // Khoi tao doi tuong bawng ham khoi tao
    constructor(tenXe, loaiXe, giaTien, mauSac) {
        // console.log(tenXe);
        this.tenXe = tenXe;
        this.loaiXe = loaiXe;
    }
    //Phuowng thuc
    hienThiThongSoxe = function () {
        console.log(`Loai xe ${this.tenXe} ban dang tim co ma ${this.mauSac} la loai ${this.loaiXe} co gia tien la: ${this.giaTien}`);
    }
}
let xe860 = new XeHoi("G63", "G-Class");
// console.log(xe860);
xe860.hienThiThongSoxe();







