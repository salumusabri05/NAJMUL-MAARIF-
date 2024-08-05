document.getElementById('button').addEventListener('click', function() {
    var linksContainer = document.getElementById('links-container');
    if (linksContainer.style.display === 'none' || linksContainer.style.display === '') {
        linksContainer.style.display = 'block';
    } else {
        linksContainer.style.display = 'none';
    }
});