const mocker = require("./script");

describe("mocker", () => {
    describe("users mocker", () => {
        const usersData = [
            { id: 1, login: "mickey" },
            { id: 2, login: "billy77" },
            { id: 3, login: "coooool123" },
        ];
        let getUsers;

        beforeEach(() => {
            getUsers = mocker(usersData);
        });

        it("should return users data", async () => {
            const resultData = await getUsers();
            expect(resultData).toBe(usersData);
        });

        it("should return users data in asynchronous way", () => {
            const resultData = getUsers();
            expect(resultData).not.toBe(usersData);
        });
    });

    describe("organizations mocker", () => {
        const orgData = [
            {
                orgId: 1123,
                companyName: "AwesomeCompany",
                employeeCount: 1222,
            },
        ];
        let getOrgs;

        beforeEach(() => {
            getOrgs = mocker(orgData);
        });

        it("should return users data", async () => {
            const resultData = await getOrgs();
            expect(resultData).toBe(orgData);
        });

        it("should return users data in asynchronous way", () => {
            const resultData = getOrgs();
            expect(resultData).not.toBe(orgData);
        });
    });
});
