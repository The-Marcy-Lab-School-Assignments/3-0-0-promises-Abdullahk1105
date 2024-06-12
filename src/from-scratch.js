// Q1
const resolvedWrapper = (value) => {
  const promise = new Promise((resolve, reject) => { 
    resolve(value);
});
 return promise
};

//Q2

const rejectedWrapper = (value) => {
    const promise = new Promise((resolve, reject) => { 
        reject(new Error(value));
    });
    return promise
};
// Q3

const handleResolvedPromise = (promise) => {
  return promise.then((resolvedValue) => {
      console.log(resolvedValue);
      return resolvedValue;
  });
};

// Q4
const handleResolvedOrRejectedPromise = (promise) => {
  return promise
  .then((resolvedValue) => {
    console.log(resolvedValue);
    return resolvedValue;  
}).catch(error => {
  console.error(`Your error message was: ${error.message}`)
  return null
})
};

// Q5
const pauseForMs = (time) => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(); 
    }, time);
})

};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
