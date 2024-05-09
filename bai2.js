function str_limit(str, limit=10){
    //Xóa tag HTML
    str = str.replace(/<[^>]*>/g,"");

    //Chuyển chuoi thanh mang
    const array = str.split(" ");
    const array_new = array.slice(0,limit);
    str = array_new.join(" ");

    return str
}

//let str_up_case = str

let str = `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.`;
str = str_limit(str);
console.log(str);