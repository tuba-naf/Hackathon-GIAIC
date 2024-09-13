function displayDescription(): void {
    const descriptionElement = document.getElementById('description') as HTMLTextAreaElement;
    if (descriptionElement) {
        descriptionElement.value = 'Write a brief description of yourself.';
    }
}

window.onload = function () {
    displayDescription();
};