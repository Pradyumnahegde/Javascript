// // Function that returns a promise after a specified delay
// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms);
//     });
//   }
  
//   // Async function using await to pause execution until the promise is resolved
//   async function asyncExample() {
//     console.log("Start");
  
//     // Using await to pause until the promise is resolved
//     await delay(2000); // Pause for 2 seconds
  
//     console.log("After 2 seconds");
  
//     // You can use await with any function that returns a promise
//     await delay(1000); // Pause for an additional 1 second
  
//     console.log("After 3 seconds");
//   }
  
//   // Call the async function
//   asyncExample();
  



// Function to simulate fetching data from an API
function fetchData() {
    return new Promise(resolve => {
      // Simulating an API call with setTimeout
      setTimeout(() => {
        resolve({ data: "Hello, async/await!" });
      }, 2000);
    });
  }
  
  // Async function to fetch data using await
  async function fetchDataExample() {
    console.log("Fetching data...");
  
    try {
      // Use await to pause until the promise is resolved
      const result = await fetchData();
  
      console.log("Data received:", result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the async function
  fetchDataExample();
  