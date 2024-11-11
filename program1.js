const getTotalIsles = function(grid) {
  if (!grid || grid.length === 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS and mark visited land
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
      dfs(i, j - 1); // left
      dfs(i, j + 1); // right
  };

  // Loop through each cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              // Found an unvisited land, start a DFS to mark all connected land
              dfs(i, j);
              islandCount++; // Increase island count
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
