import { useFormik } from 'formik'
import React, { useState } from 'react'
import InputCustom from './InputCustom';
import createRandomSquares from './../utils/utils'

const BloodPressure = () => {
    const [value, setValue] = useState("");
    const [valueBlood, setValueBlood] = useState("");

    function BloodPressureCheck(parameter) {
        let { tamTruong, tamThu } = parameter;
        tamTruong *= 1;
        tamThu *= 1;
        if (tamTruong < 115 && tamThu < 65) {
            setValueBlood("Huyết áp bình thường");
        } else if ((tamTruong >= 115 && tamTruong < 130) && (tamThu >= 65 && tamThu < 80)) {
            setValueBlood("Tiền sử tăng huyết áp");
        } else if (tamTruong >= 130 && tamThu >= 80) {
            setValueBlood("Cao huyết áp");
        }
        else {
            if (tamTruong - tamThu < 50) {
                switch (true) {
                    case tamTruong < 115:
                        setValueBlood("Huyết áp bình thường (Tâm thu lệch)");
                        break;
                    case tamTruong >= 115 && tamTruong < 130:
                        setValueBlood("Tiền sử tăng huyết áp (Tâm thu lệch)");
                        break;
                    case tamTruong >= 130:
                        setValueBlood("Tiền sử tăng huyết áp (Tâm thu lệch)");
                        break;
                    default:
                        setValueBlood("Huyết áp bất định cần theo dõi thêm");
                        break;
                }
            }
        }
    }
    function heartRateCheck(parameter) {
        let { nhipTim } = parameter;
        nhipTim *= 1;
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
            formik.resetForm();
        }
    });
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h1 className='fs-10 mb-4 p-2 text-center my-3 z-2'>Kiểm tra thông số huyết áp</h1>
                    <div className='col-xl-5 mx-auto'>
                        <div className='form-container glass-morphism'>
                            <form onSubmit={formik.handleSubmit}>
                                <InputCustom labelContent={"Nhập huyết áp tâm trương"} smallContent={"Là số lớn và thường nằm trước trong kết quả đo"} id={"tamTruong"} name={"tamTruong"} onChange={formik.handleChange} value={formik.values.tamTruong} />
                                <InputCustom labelContent={"Nhập huyết áp tâm thu"} smallContent={"Là số nhỏ, thường nằm sau"} id={"tamThu"} name={"tamThu"} onChange={formik.handleChange} value={formik.values.tamThu} />
                                <InputCustom labelContent={"Nhập nhịp tim"} smallContent={"Nhịp tim đo được của thiết bị đo"} id={"nhipTim"} name={"nhipTim"} onChange={formik.handleChange} value={formik.values.nhipTim} />
                                <div className='text-center mb-4'><button type='submit' className='btn btn-outline-dark w-100'>Kiểm tra</button></div>
                                <div className='myShadow'>
                                    <h5 className='p-2'>Chẩn đoán</h5>
                                    <div className='pb-5'>
                                        <p className='mb-3'><i className="fa-solid fa-droplet text-warning fs-3 mx-3 mb-3"></i>{valueBlood}</p>
                                        <p className='mb-3'><i className="fa-solid fa-heart text-danger fs-4 mx-3 mb-3"></i>{value}</p>
                                    </div>
                                </div>
                            </form>
                            <div className='note'>
                                <p>*** Lưu ý: Chẩn đoán chỉ mang tính tham khảo và kết quả đo tại nhà thường có sai số, nếu kết quả đo bất thường trên 2 lần hoặc huyết áp bất thường vui lòng đến trạm y tế hoặc bệnh viện gần nhất để được thăm khám kịp thời</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='random-square'>{createRandomSquares(1)}</div>
        </>
    )
}

export default BloodPressure