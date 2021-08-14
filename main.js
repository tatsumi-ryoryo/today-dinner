'use strict'

{
    const btn =document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.random();
        if (n < 0.2) {
            btn.textContent = 'ハンバーグ';
        } else if (n < 0.4) {
            btn.textContent = 'ラーメン';
        } else if (n < 0.6) {
            btn.textContent = 'オムライス';
        } else if (n < 0.8) {
            btn.textContent = 'カレー';
        } else {
            btn.textContent = 'ミミズ';
        }
    });
}
