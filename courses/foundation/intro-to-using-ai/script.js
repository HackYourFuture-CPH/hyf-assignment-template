const btn = document.getElementById('colorBtn');
if (!btn) {
    throw new Error('Could not find button with id "colorBtn"');
}

const colors = [
    '#6CD4FF',
    '#8C52FF',
    '#FF6B6B',
    '#FFB86B',
    '#7AF0C7',
    '#C39CFF',
    '#FFE66D',
    '#FF8FAB'
];

btn.addEventListener('click', () => {
    const colorCount = colors.length;
    const randomNumber = Math.random();
    const randomIndex = Math.floor(randomNumber * colorCount);
    const color = colors[randomIndex];
    document.body.style.background = color;
});
