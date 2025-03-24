import { useFormik } from 'formik'
import React, { useState } from 'react'
import InputCustom from './InputCustom';

const BloodPressure = () => {
    const [value, setValue] = useState("");
    const [valueBlood, setValueBlood] = useState("");

    function BloodPressureCheck(parameter) {
        let { tamTruong, tamThu } = parameter;
        if (tamTruong < 115 && tamThu < 65) {
            setValueBlood("Huyết áp bình thường");
        } else if ((tamTruong >= 115 && tamTruong < 130) && (tamThu >= 65 && tamThu < 80)) {
            setValueBlood("Tiền sử tăng huyết áp");
        } else if (tamTruong >= 130 && tamThu >= 80) {
            setValueBlood("Cao huyết áp");
        }
        else {
            setValueBlood("Huyết áp kép cần theo dõi thêm");
        }
    }
    function heartRateCheck(parameter) {
        let { nhipTim } = parameter;
        if (nhipTim <= 60) {
            setValue("Nhịp tim chậm");
        } else if (nhipTim > 60 && nhipTim < 100) {
            setValue("Nhịp tim bình thường");
        }
        else if (nhipTim >= 100) {
            setValue("Nhịp tim nhanh");
        }
        else {
            setValue("Nhịp tim bất ổn");
        }
    }

    const formik = useFormik({
        initialValues: {
            tamTruong: "",
            tamThu: "",
            nhipTim: ""
        },
        onSubmit: (values) => {
            BloodPressureCheck(values);
            heartRateCheck(values);
        }
    });
    return (
        <div className='container'>
            <div className="row">
                <h1 className='fs-10 mb-4 p-2 text-center mb-3'>Kiểm tra thông số huyết áp</h1>
                <div className='col-xl-3 mx-auto'>
                    <form onSubmit={formik.handleSubmit}>
                        <InputCustom labelContent={"Nhập huyết áp tâm trương"} smallContent={"Là số lớn và thường nằm trước trong kết quả đo"} id={"tamTruong"} name={"tamTruong"} onChange={formik.handleChange} value={formik.values.tamTruong} />
                        <InputCustom labelContent={"Nhập huyết áp tâm thu"} smallContent={"Là số nhỏ, thường nằm sau"} id={"tamThu"} name={"tamThu"} onChange={formik.handleChange} value={formik.values.tamThu} />
                        <InputCustom labelContent={"Nhập nhịp tim"} smallContent={"Nhịp tim đo được của thiết bị đo"} id={"nhipTim"} name={"nhipTim"} onChange={formik.handleChange} value={formik.values.nhipTim} />
                        <div className='text-center mb-4'><button type='submit' className='btn btn-outline-dark w-100'>Kiểm tra</button></div>
                        <div className='myShadow'>
                            <h5 className='p-2'>Chẩn đoán</h5>
                            <div className='pb-5'>
                                <p>{valueBlood}</p>
                                <p>{value}</p>
                            </div>
                        </div>
                    </form>
                    <div className='note'>
                        <p>*** Lưu ý: Chẩn đoán chỉ mang tính tham khảo và kết quả đo tại nhà thường có sai số, nếu kết quả đo bất thường trên 2 lần hoặc huyết áp bất thường vui lòng đến trạm y tế hoặc bệnh viện gần nhất để được thăm khám kịp thời</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BloodPressure