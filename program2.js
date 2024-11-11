const decodeTheRing = function(s, p) {
  const m = s.length;
  const n = p.length;

  // Create a DP table with (m + 1) rows and (n + 1) columns
  let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  // Initial condition: empty message matches empty pattern
  dp[0][0] = true;

  // Handle the case when pattern has '*' at the beginning
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
              // Match character or '?'
              dp[i][j] = dp[i - 1][j - 1];
          } else if (p[j - 1] === '*') {
              // '*' matches zero or more characters
              dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          }
      }
  }

  // The result will be in dp[m][n], whether the entire message matches the entire pattern
  return dp[m][n];
};

module.exports = decodeTheRing;
