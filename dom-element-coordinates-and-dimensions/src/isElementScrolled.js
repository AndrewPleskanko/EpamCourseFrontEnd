export function isElementScrolled(element) {
    if (element) {
        return {
            scrollTop: element.scrollTop || 0,
            scrollLeft: element.scrollLeft || 0,
            isScrolled: element.scrollTop > 0 || element.scrollLeft > 0
        };
    }
    return {
        scrollTop: null,
        scrollLeft: null,
        isScrolled: null
    };
}