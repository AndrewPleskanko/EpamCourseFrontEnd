const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const { readTextFile } = require("../test-utils/readTextFile");
const {
    addFileProtocolToElements,
} = require("../test-utils/addFileProtocolToElements");

const { formatDistanceToNow } = require("./script");

describe("JavaScript Date and methods", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        // You can listen for other console methods as well https://github.com/jsdom/jsdom#virtual-consoles
        virtualConsole.on("log", consoleLogListener);

        const filePath = path.join(__dirname, "index.html");
        htmlString = await readTextFile(filePath);

        // Create fake DOM
        dom = new JSDOM(htmlString, {
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole,
        });
        document = dom.window.document;

        // Replace CSS href with absolute paths
        const linkElements = document.querySelectorAll(
            'link[rel="stylesheet"]'
        );
        addFileProtocolToElements(linkElements, "href", __dirname);
    });

    describe("formatDistanceToNow", () => {
        it('should format to "less than a minute"', () => {
            const date = new Date(new Date() - 29 * 1000);

            expect(formatDistanceToNow(date)).toBe("less than a minute");
        });

        it('should format to "1 minute"', () => {
            const date = new Date(new Date() - 89 * 1000);

            expect(formatDistanceToNow(date)).toBe("1 minute");
        });

        it('should format to "34 minutes"', () => {
            const date = new Date(new Date() - 43.3 * 60 * 1000);

            expect(formatDistanceToNow(date)).toBe("43 minutes");
        });

        it('should format to "about 1 hour"', () => {
            const date = new Date(new Date() - 89 * 60 * 1000);

            expect(formatDistanceToNow(date)).toBe("about 1 hour");
        });

        it("should format to date", () => {
            const date = new Date(2012, 6, 22, 8, 7, 6);

            expect(formatDistanceToNow(date)).toBe("22.07.2012 08:07:06");
        });

        it('should return "Date is unknown" when null', () => {
            const date = null;

            expect(formatDistanceToNow(date)).toBe("Date is unknown");
        });

        it('should return "Date is unknown" when undefefined', () => {
            expect(formatDistanceToNow()).toBe("Date is unknown");
        });
    });
});
