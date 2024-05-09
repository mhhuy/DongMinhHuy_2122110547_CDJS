function validateForm(){
    try{
        //ho ten
        const hoten=document.getElementById('hoten');
        if(hoten.value.length==0){
            hoten.focus();
            throw "Họ tên không được để trống";
        }
        //Mã sinh viên
        const masinhvien=document.getElementById('masv');
        const patternmasv = /21\d{8}$/;
        if (patternmasv.test(masinhvien.value)==false){
            masinhvien.focus();
            throw "Mã sinh viên không hợp lệ"
        }
        //Số điện thoại
        const dienthoai = document.getElementById('dienthoai');
        const patternphone = /^0[3|5|7|8|9][0-9]{8}$/;
        if (patternphone.test(dienthoai.value)==false){
            dienthoai.focus();
            throw "Số điện thoại không hợp lệ";
        }
        //email
        const Email = document.getElementById('email');
        const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (patternEmail.test(Email.value)==false){
            Email.focus();
            throw "Email không hợp lệ!";
        }
        //lớp
        const MaLop = document.getElementById('lop');
        const checkResult = /^CCQ\d{4}[0-9A-Z]{1,2}$/;
        if(checkResult.test(MaLop.value)==false){
            MaLop.focus();
            throw "Mã lớp không hợp lệ!";
        }
        return true;
    }
    catch(error){
        console.log(error);
    }
    return false;
}