const decodeTheRing = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS
  const dfs = (i, j) => {
      // If out of bounds or water, return
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
          return;
      }

      // Mark the current land as visited by changing 'L' to 'W'
      grid[i][j] = 'W';

      // Explore the 4 neighbors (up, down, left, right)
      dfs(i - 1, j); // up
      dfs(i + 1, j); // down
      dfs(i, j - 1); 
      dfs(i, j + 1); 
  };
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              dfs(i, j);
              islandCount++; 
          }
      }
  }

  return islandCount;
};
console.log(decodeTheRing([
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"]
])); 
console.log(decodeTheRing([
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"]
])); 
