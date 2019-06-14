const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
        return new Promise(function(resolve, reject) {
            resolve(true);
        });
    },
};

export default fakeAuth;
