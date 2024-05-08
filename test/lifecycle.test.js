describe('MyComponent', () => {
    let data;

    beforeEach(() => {
        // Initialize test data before each test case
        data = [1, 2, 3];
    });

    afterEach(() => {
        // Reset test data after each test case
        data = null;
    });

    test('should have initial data', () => {
        // Test that data is initialized correctly
        expect(data).toEqual([1, 2, 3]);
    });

    test('should be reset after each test', () => {
        // Test that data is reset to null after each test case
        expect(data).toBeNull();
    });
});
