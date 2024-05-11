const valueInput = document.getElementById('value');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

const conversionRates = {
    // Mét
    met: {
        met: 1,
        feet: 0.3048,
        inch: 39.37,
        // Thêm đơn vị khác...
    },
    // Feet
    feet: {
        met: 3.2808,
        feet: 1,
        inch: 12,
        // Thêm đơn vị khác...
    },
    // Inch
    inch: {
        met: 0.0254,
        feet: 0.08333,
        inch: 1,
        // Thêm đơn vị khác...
    },
    // Thêm đơn vị khác...
};

convertButton.addEventListener('click', function() {
    const value = parseFloat(valueInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    if (isNaN(value) || !conversionRates[fromUnit] || !conversionRates[toUnit]) {
        resultDiv.textContent = 'Lỗi! Vui lòng nhập giá trị và chọn đơn vị chính xác.';
        return;
    }

    const convertedValue = value * conversionRates[fromUnit][toUnit];
    resultDiv.textContent = `${valueInput.value}${fromUnit} = ${convertedValue.toFixed(3)}${toUnit}`;
});
