# Iterative Solution


function closestVal (tree, target) {

//set our starting node and starting node value as the closest value to the target.
	let current = tree;
	let closest = tree.value;

  
  while(current !== null) {
  
  //finding the difference between the current node value and the target (making sure its absolute value);
    let currentDiff = Math.abs(target-current.value);
    
    //checking if the absolute value of the difference between prev. set closest and target is larger than the current difference. if yes, the current node's value is closer to the target and the closest must be re-defined to be current's value. 
    if(Math.abs(closest-target) > currentDiff) {
      closest = current.value;
    }
    
    //checking if the current value is smaller or larger than the target. depending on whether it is smaller or larger, the current value will be redefined as current's left or right. 
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


