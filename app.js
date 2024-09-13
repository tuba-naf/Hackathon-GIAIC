function displayDescription() {
    var descriptionElement = document.getElementById('description');
    if (descriptionElement) {
        descriptionElement.value = 'Write a brief description of yourself.';
    }
}
window.onload = function () {
    displayDescription();
};
