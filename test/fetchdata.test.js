const fetchData = require('../fetchdata')

describe('fetchData', () => {
    test('data should match', () => {
        /** This test case should not work with asynchronous code */
        // const data = fetchData()
        //  expect(data).toEqual(
        //     JSON.stringify({
        //         name:'pranay',
        //         branch: 'BD',
        //         tech: 'MERN'
        //     })
        //  )

        /** Test case for asynchronous code */

        expect(fetchData()).resolves.toBe(
            JSON.stringify({
                name:'pranay',
                branch: 'BD',
                tech: 'MERN'
            })
        )
    })
})