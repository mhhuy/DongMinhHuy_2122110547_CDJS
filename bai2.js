const danhSachMonHocUl = document.getElementById('danhSachMonHoc');
const formThemMonHoc = document.getElementById('formThemMonHoc');

formThemMonHoc.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi submit mặc định của form

  const tenMonHocInput = document.getElementById('tenMonHoc');
  const tenMonHoc = tenMonHocInput.value.trim();

  if (tenMonHoc === '') {
    alert('Vui lòng nhập tên môn học!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = tenMonHoc;

  // Thêm nút "Xóa" cho mỗi môn học
  const btnXoa = document.createElement('button');
  btnXoa.textContent = 'Xóa';
  btnXoa.addEventListener('click', function() {
    danhSachMonHocUl.removeChild(li);
  });

  li.appendChild(btnXoa); // Thêm nút "Xóa" vào li

  danhSachMonHocUl.appendChild(li); // Thêm li vào danh sách

  tenMonHocInput.value = ''; // Xóa nội dung input sau khi thêm
});