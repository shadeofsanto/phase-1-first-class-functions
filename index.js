function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function receivesAFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}
