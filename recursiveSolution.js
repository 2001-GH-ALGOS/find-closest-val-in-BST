
// ------------------------- Recursive Solution -----------------------------

function findClosestVal(tree, target, closestSoFar = Infinity) {

  // BASE CASE: The tree is null
  if (tree === null) {
    return closestSoFar
  }

  // RECURSIVE CASE: Tree is not null
  else {
    // Evaluate the tree value and update closestSoFar if needed
    if (Math.abs(tree.val - target) < Math.abs(closestSoFar - target)) {
      closestSoFar = tree.val
    };
    //Recursively call to the next tree
    if (target < tree.val) return findClosestVal(tree.left, target, closestSoFar)
    else return findClosestVal(tree.right, target, closestSoFar)
  }

}


// ----------------------- Time and Space Complexity -------------------------

// Recursive Solution

// Balanced BST:
// Time complexity: O(log(n)), due to visiting the nodes in one path
// Space Complexity: O(log(n)), due to the callstack that is log(n) nodes high

// Regular, or not-necessarily-balanced, BST:
// Time complexity: O(n), because the tree could be totally unbalanced and linear
// Space Complexity: O(n), due to the callstack from a potentially linear tree



// Iterative Solution (the optimal solution)

// Balanced BST:
// Time complexity: O(log(n)), due to visiting the nodes in one path
// Space Complexity: O(1)

// Regular, or not-necessarily-balanced, BST:
// Time complexity: O(n), because the tree could be totally unbalanced and linear
// Space Complexity: O(1)


// --------------------- Notes for Interview Conductors -----------------------

// You must search one entire path from root node to leaf node (unless you find the target first)
// At every step we can eliminate half of the tree from our search based on BST properties
// Math.abs will be a helpful method for interviewers
// Recursion is not the optimal solution to this problem

// For Big O, ask interviewers about a balanced tree at first
// If they solve that, ask about a regular/unbalanced tree




// -------------------- Sample Tree to Test Your Own Code ---------------------

// Here is the sample tree from the ReadMe

// let one = {val: 1, left: null, right: null}
// let fourteen = {val: 14, left: null, right: null}

// let two = {val: 2, left: one, right: null}
// let fiveAgain = {val: 5, left: null, right: null}
// let thirteen = {val: 13, left: null, right: fourteen}
// let twentyTwo = {val: 22, left: null, right: null}

// let five = {val: 5, left: two, right: fiveAgain}
// let fifteen = {val: 15, left: thirteen, right: twentytwo}

// let root = {val: 10, left: five, right: fifteen}

