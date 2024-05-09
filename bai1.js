function removeSpace(str){
    //Xóa trắng đầu cuối
    str = str.trim();

    //Xóa 2 kí tự trắng
    str = str.replace(/ +/g," ");
    
    //Chuyển chuỗi về in thuong
    str = str.toLowerCase();
    //Chuyển kí tự đầu thành in hoa
    const arr = str.split(" ");
    for(let i=0; i<arr.length;i++)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join(" ");
    return str
}

//let str_up_case = str

let str = "   xiN    ChAo     bAn    yeU   ";
str = removeSpace(str);
console.log(str);