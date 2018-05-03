const promise = new Promise((resolve, reject) => {
    // resolve('This is the data came from Promise.');
    reject('something went wrong!');
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ',error);
});