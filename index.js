// code your solution here
// Function to find the year of the Superbowl win
function superbowlWin(record) {
    // Use the find() method to locate the first object with a result of 'W'
    const winRecord = record.find(game => game.result === "W");
  
    // If a winRecord is found, return its year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(record)); // Output: "2015"
  