// import {congThangTu} from "./database.js";
import { tongCong } from "./database.js";
const constLuong = 5000000;
const valueDate = [31,28,31,30,31,30,31,31,30,31,30,31];
const date = new Date().getMonth();
let valuedayofCurrentMounth;
let perSent;
let result = document.querySelector('.get-result');

function getFullDayOfCurrentMonth(curDate, arrDate) {
    valuedayofCurrentMounth = arrDate[curDate];
    return valuedayofCurrentMounth;
}

function tyLeLuongTheoThang(){
    perSent = constLuong / parseInt(valuedayofCurrentMounth);
    return perSent;
}

function tinhLuong(){
    let thanhTien = tongCong * perSent
    result.innerHTML = `<h3>Tong Luong Toi Hien Tai:</h3> ${thanhTien} VND`
    console.log(tongCong)
    console.log(perSent)
    console.log(perSent * 24.5)
    return thanhTien;
}

getFullDayOfCurrentMonth(date, valueDate);
tyLeLuongTheoThang();
console.log(tinhLuong())