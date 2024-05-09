function Tong() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = result;
  }

  function Hieu() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    document.getElementById('result').textContent = result;
  }

  function Tich() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('result').textContent = result;
  }

  function Thuong() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 / num2;
    document.getElementById('result').textContent = result;
  }

  function Canbathai() {
    const num = parseFloat(document.getElementById('num1').value);
    const result = Math.sqrt(num);
    document.getElementById('result').textContent = result;
  }

  function Luythua() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 ** num2;
    document.getElementById('result').textContent = result;
  }