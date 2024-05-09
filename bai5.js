const arrNumber = [9,3,5,8,1,4,3,2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

//-	Thêm số 10 vào đầu và cuối (push, shift)
arrNumber.push(10);
arrNumber.unshift(10);
console.log(arrNumber);
//-	Xóa số đầu và cuối (pop, unshift)
arrNumber.pop();
arrNumber.shift();
console.log(arrNumber);
//-	Sắp xếp tăng dần mảng arrNumber và arrStr (sort)
arrNumber.sort();
arrStr.sort();
console.log(arrNumber);
console.log(arrStr);
//- Lấy ra mảng con từ vị trí 3 đến 5 từ mảng arrStr (slice)
const newArr = arrStr.slice(3, 5);
console.log(newArr);
//-	Lấy ra mảng con từ vị trị 3 đến 5 từ mảng arrNumber (slice)
const newArrN = arrNumber.slice(3, 5);
console.log(newArrN);
//-	Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber (plice)
arrNumber.splice(3, 1);
arrNumber.splice(3, 0, 27, 5, 3);
console.log(arrNumber);
//-	Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber (indexOf)
const posFirst = arrNumber.indexOf(3);

if (posFirst !== -1) {
  console.log(`Vị trí đầu tiên của phần tử 3 là: ${posFirst}`);
} else {
  console.log("Phần tử 3 không tồn tại trong mảng.");
}
//-	Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber (lastIndexOf)
const posLast = arrNumber.lastIndexOf(3);

if (posLast !== -1) {
  console.log(`Vị trí cuối cùng của phần tử 3 là: ${posLast}`);
} else {
  console.log("Phần tử 3 không tồn tại trong mảng.");
}
//-	Kiểm tra phân tử có ghí tri 3 có trong mảng arrNumber không (includes)
const hasValue3 = arrNumber.includes(3);

if (hasValue3) {
  console.log("Mảng arrNumber có chứa phần tử 3.");
} else {
  console.log("Mảng arrNumber không chứa phần tử 3.");
}
//-	Duyệt mảng forEach
arrNumber.forEach(function(arrNumber) {
    console.log(`${arrNumber}`);
  });
  
arrStr.forEach(function(arrStr) {
   console.log(`${arrStr}`);
 });
//-	Duyệt mảng map

//-	Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber (filter)
const numLarger5 = arrNumber.filter(function(number) {
    return number > 5;
  });
console.log(numLarger5);
//-	Tính tổng các phần tử mảng arrNumber (reduce)
const sum = arrNumber.reduce(function(a, b) {
    return a + b;
  }, 0);
  
  console.log(sum);
//-	Nối 2 mảng arrNumber và arrStr lại thành 1 mảng (concat)
const newArrConcat = arrNumber.concat(arrStr);

console.log(newArrConcat);
//-	Nối các phần tử mảng arrStr các nhau bởi dấu "-" (join)
const joinedStr = arrStr.join("-");

console.log(joinedStr);
//-	Gán tất cả các phần tử mảng arrNumber bằng 0 (fill)
const fillArr = arrNumber.fill(0);
console.log(fillArr);
//-	Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng (copyWithin)
arrNumber.copyWithin(2, 0, 4);

console.log(arrNumber);

//-	Tìm kiếm phần tử trong mảng thõa mãn điều kiện
// find
const numfind = arrNumber.find(function(number) {
    return number % 2 === 0;
  });
  
  console.log(numfind);
// findIndex
const numfindindex = arrNumber.findIndex(function(number) {
    return number % 2 === 0;
  });
  
  console.log(numfindindex);
// findLast
const numfindlast = arrNumber.findLast(function(number) {
    return number % 2 === 0;
  });
  
  console.log(numfindlast);
// findLastIndex
const numfindLastIndex = arrNumber.findLastIndex(function(number) {
    return number % 2 === 0;
  });
  
  console.log(numfindLastIndex);
//-	Kiểm tra tất cả các phần tử thõa mãn điều kiện (every)
const numEvery = arrNumber.every(function(number) {
    return number % 2 === 0;
  });
  
  console.log(numEvery);
//-	Kiểm tra ít nhất một phần tử thõa mãn điều kiện (some)
const numSome = arrNumber.some(function(number) {
    return number % 2 === 0;
  });
  
  console.log(numSome); 