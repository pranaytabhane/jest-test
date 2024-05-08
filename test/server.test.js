const router = require('../router')

const useDisableSpy = jest.fn()
const useSpy = jest.fn()
const useListenSpy = jest.fn()

jest.doMock('express', () => {
    return () => ({
        disable: useDisableSpy,
        use: useSpy,
        listen: useListenSpy
    })
})

describe('server configuration', () => {
    test('test server configuration is correct or not', () => {
        require('../server')
        expect(useDisableSpy).toHaveBeenCalledWith('x-powered-by');
        expect(useSpy).toHaveBeenCalledWith(router);
        expect(useListenSpy).toHaveBeenCalled()
    })
})