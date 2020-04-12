// Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples

// Async/await is a new way to write asynchronous code. Previous alternatives for asynchronous code are callbacks and promises.Async/await is syntax sugar built on top of promises. Async/await is, like promises, non blocking.Async/await makes asynchronous code look and behave a little more like synchronous code. 

// 1.Concise Code

/*Code with Promises

const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()
*/

/*Code with Async Await
const makeRequest = async () => {
    console.log(await getJSON())
    return "done"
  }
  
makeRequest()
*/

// We didn’t have to write .then, create an anonymous function to handle the response, or give a name data to a variable that we don’t need to use. We also avoided nesting our code.

// 2.Error Handling
// Async/await makes it possible to handle both synchronous and asynchronous errors with the  try/catch. 

/*
const makeRequest = () => {
  try {
    getJSON()
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      // uncomment this block to handle asynchronous errors
      // .catch((err) => {
      //   console.log(err)
      // })
  } catch (err) {
    console.log(err)
  }
*/

//Same code with async await
// const makeRequest = async () => {
//     try {
//       // this parse may fail
//       const data = JSON.parse(await getJSON())
//       console.log(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

// 3. Error Stacks

// Imagine a piece of code that calls multiple promises in a chain, and somewhere down the chain an error is thrown.

// const makeRequest = () => {
//     return callAPromise()
//       .then(() => callAPromise())
//       .then(() => callAPromise())
//       .then(() => callAPromise())
//       .then(() => callAPromise())
//       .then(() => {
//         throw new Error("oops");
//       })
//   }
  
//   makeRequest()
//     .catch(err => {
//       console.log(err);

// The error stack returned from a promise chain gives no clue of where the error happened. 

// const makeRequest = async () => {
//     await callAPromise()
//     await callAPromise()
//     await callAPromise()
//     await callAPromise()
//     await callAPromise()
//     throw new Error("oops");
//   }
  
//   makeRequest()
//     .catch(err => {
//       console.log(err);
//     })


