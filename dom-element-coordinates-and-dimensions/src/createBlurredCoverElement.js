export function createBlurredCoverElement(elementToCover) {
    let cover = document.createElement('div');
    cover.className = 'cover';
    cover.style.position = 'absolute';
    let rect = elementToCover.getBoundingClientRect();
    cover.style.top = `${rect.top + window.scrollY}px`;
    cover.style.left = `${rect.left + window.scrollX}px`;
    cover.style.width = `${rect.width}px`;
    cover.style.height = `${rect.height}px`;
    return cover;
}