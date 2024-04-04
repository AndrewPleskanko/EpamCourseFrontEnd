export function getPageData() {
    const windowHeight = Math.max(
        Number(window.innerHeight) || 0,
        document.documentElement.clientHeight || 0,
        document.body.clientHeight || 0
    );
    const windowWidth = Math.max(
        Number(window.innerWidth) || 0,
        document.documentElement.clientWidth || 0,
        document.body.clientWidth || 0
    );
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
    );
    const documentWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth
    );
    const currentScrollFromTop = window.pageYOffset || document.documentElement.scrollTop;
    const currentScrollFromLeft = window.pageXOffset || document.documentElement.scrollLeft;

    return {
        windowHeight,
        windowWidth,
        documentHeight,
        documentWidth,
        currentScrollFromTop,
        currentScrollFromLeft,
    };
}
