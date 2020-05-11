# Iterative Solution

```
function closestVal (tree, target, closest = null) {
  let current = tree;
  let closest = Math.abs(target-current.value);
  
  while(current !== null) {
  
    let currentDiff = Math.abs(target-current.value);
    
    if(closest > currentDiff) {
      closest = currentDiff
    }
    
    if(target < current.value) {
      current = current.left
    } else if (target > current.value) {
      current = currrent.right
    } else {
      break;
    }
  
  }
  
  return closest
}

```
