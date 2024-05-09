function convertString() {
    const inputString = document.getElementById('inputString').value;
    const friendlyURL = convertToFriendlyURL(inputString);
    document.getElementById('result').textContent = friendlyURL;
  }

function convertToFriendlyURL(str) {
        
    //Xóa 2 kí tự trắng
    str = str.replace(/ +/g," ");
    
    //Chuyển chuỗi về in thuong
    str = str.toLowerCase();

    //Xóa tag HTML
    str = str.replace(/<[^>]*>/g,"");

    //Xoa ki tu dac biet
    str = str.replace(/(å|ä|ā|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä|ą)/g, 'a');
    str = str.replace(/(đ|ď|ḋ|đ)/, 'd');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ę|ë|ě|ė)/, 'e');
    str = str.replace(/(ì|í|î|ị|ỉ|ĩ|ï|î|ī|¡|į)/, 'i');
    str = str.replace(/(ö|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö|ø|ō)/, 'o');
    str = str.replace(/(ü|ù|ú|ū|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü|ų|ů)/, 'u');

    str = str.replace(/[^\w\s-]/g, '');

    //Xóa trắng đầu cuối
    str = str.trim();
    
    //Thay the khoang trang bang -
    str = str.replace(/ +/g,"-");


    return str;
}