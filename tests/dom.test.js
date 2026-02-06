/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');

test('Clicking button toggles background color', () => {
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    require('../script.js');
    
    const btn = document.getElementById('mode-toggle');
    btn.click(); // Simulate user click
    expect(document.body.style.backgroundColor).toBe('black');
    
    btn.click(); // Click again
    expect(document.body.style.backgroundColor).toBe('white');
});
