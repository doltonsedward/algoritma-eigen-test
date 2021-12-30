function matchQueryByInput(input, query) {
    let result = []
    query.forEach(item => {
        for (let i = 0; i < input.length; i++) {
            if (item === input[i]) {
                result.push(i - 1)
            }
        }
    })

    return result
}