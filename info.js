function showInfo(imgSrc, title, description) {
    document.getElementById('info-img').src = imgSrc;
    document.getElementById('info-title').innerText = title;
    document.getElementById('info-description').innerText = description;

    const infoPanel = document.getElementById('info-panel');
    const overlay = document.getElementById('overlay');
    
    overlay.style.display = 'block';
    infoPanel.style.display = 'block';
    infoPanel.style.animation = 'slideIn 0.5s ease-out forwards';
}

function closeInfo() {
    const infoPanel = document.getElementById('info-panel');
    const overlay = document.getElementById('overlay');
    
    infoPanel.style.animation = 'slideOut 0.5s ease-in forwards';
    setTimeout(() => {
        infoPanel.style.display = 'none';
        overlay.style.display = 'none';
    }, 500);
}