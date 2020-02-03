var x = document.getElementById("dangki");
console.log(x);
function onDangKy(){
    var divDK = document.getElementById("divdangki");
    var divDN = document.getElementById("divdangnhap");
    divDK.style.display = "block";
    divDN.style.display = "none";
}

function onDangNhap(){
    var divDK = document.getElementById("divdangki");
    var divDN = document.getElementById("divdangnhap");
    divDK.style.display = "none";
    divDN.style.display = "block";
}

function KiemTraDoDai(idText, minlength, maxlength){
    var inputText = document.getElementById(idText);
    var field = inputText.value;
    var pThongBao = document.getElementById("pthongbao");
    if(field.length <minlength || field.length >maxlength){
        pThongBao.style.display = "block";
        pThongBao.innerHTML =  "Please input the userid between " +minlength+ " and " +maxlength+ " characters";
        return false;
    } else {
        pThongBao.style.display = "none";
        return true;
    }

}

function KiemTraEmail(idTag) {
    var inputTag = document.getElementById(idTag);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pthongbao = document.getElementById("pthongbao");
    if(inputTag.value.match(mailformat)){
        pthongbao.style.display = "none";
        return true;
        }else{
            pthongbao.style.display = "block";
            pthongbao.innerHTML =  "You have entered an invalid email address!";
            pthongbao.style.color = "red";
            return false;
    }
}

function KiemTraTuoi (minTuoi, maxTuoi, idTagThongBao) {
    var pthongbao = document.getElementById(idTagThongBao);
    var tuoi = document.getElementById("tuoi");
    var numbers = /^[0-9]+$/;
    if(tuoi.value.match(numbers)){
        var intTuoi = parseInt(tuoi.value);
        if(intTuoi <minTuoi || intTuoi >maxTuoi){
            pthongbao.style.display = "block";
            pthongbao.innerHTML = "Nhập tuổi từ" + minTuoi + "đến" +maxTuoi ;
            pthongbao.style.color = "red";
            return false;
        }else{
             pthongbao.style.display = "none";
             return true;
         }
      
       return true;
     
    } else {
        pthongbao.style.display = "block";
        pthongbao.innerHTML =  "Please input numeric characters only";
        pthongbao.style.color = "red";
        return false;
    }
}
function KiemTraBatBuocDangKy(){
    var pThongBao = document.getElementById("pthongbao");
    var nghenghiep = document.getElementById("nghenghiep");
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");
    if(form_dk.tendangnhap.value =="" || form_dk.matkhau.value =="" || form_dk.email.value ==""|| form_dk.tuoi.value ==""){
        pThongBao.style.display = "block";
        pThongBao.style.color = "red";

        form_dk.tendangnhap.style.border = "solid 2px red";
        form_dk.matkhau.style.border = "solid 2px red";
        form_dk.email.style.border = "solid 2px red";
        form_dk.tuoi.style.border = "solid 2px red";

        pThongBao.innerHTML = "Vui lòng điền đầy đủ thông tin";
        return false;
    }else  if(nghenghiep.selectedIndex == 0){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Bạn chưa chọn nghề nghiệp";
        return false;
    }else if( !nam.checked && !nu.checked){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Bạn chưa chọn giới tính";
        pThongBao.style.color = "red";
        return false;
    }else{
        pThongBao.style.display = "none";
        return true;
    }
}
function KiemTraHopLe(){
    return KiemTraBatBuocDangKy() && KiemTraDoDai("tendangnhap",1,10) && KiemTraEmail("email") &&
    KiemTraTuoi(18,30,"pthongbao");
}

