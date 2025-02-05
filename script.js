function revealPaper() {
    const paper = document.getElementById('secretPaper');
    const lockText = document.getElementById('lockText');
    paper.classList.toggle('open');
    lockText.style.opacity = paper.classList.contains('open') ? '0' : '1';
}
