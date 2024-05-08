function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JSON.stringify({
                name:'pranay',
                branch: 'BD',
                tech: 'MERN'
            }))
        }, 1000);
    })
}

module.exports = fetchData