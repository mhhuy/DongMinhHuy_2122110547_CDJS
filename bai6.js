function hienThiGio() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  hienThiGio();  // Hiển thị giờ ban đầu
  setInterval(hienThiGio, 1000);  // Cập nhật giờ mỗi giây
  