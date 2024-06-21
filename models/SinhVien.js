class SinhVien {
    txtMaSV = "";
    txtTenSV = "";
    txtEmail = "";
    txtPass = "";
    txtNgaySinh = "";
    khSV = "";
    txtDiemToan = "";
    txtDiemLy = "";
    txtDiemHoa = "";
    tinhDiemTrungBinh = function () { return (this.txtDiemHoa * 1 + this.txtDiemLy * 1 + this.txtDiemToan * 1) / 3 }

    tinhDiem2Mon = function () { return (this.txtDiemHoa + txtDiemLy) / 2 }
}