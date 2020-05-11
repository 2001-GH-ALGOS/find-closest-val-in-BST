# Iterative Solution

```
function closestVal (tree, target) {
	let current = tree;
	let closest = tree.value;

  
  while(current !== null) {
  
    let currentDiff = Math.abs(target-current.value);
    
    if(Math.abs(closest-target) > currentDiff) {
      closest = current.value;
    }
    
    if(target < current.value) {
      current = current.left
    } else if (target > current.value) {
      current = current.right
    } else {
      break;
    }
  
  }
  
  return closest
	
}

```
