const mapRecursive = function(val) {
  // 1. BASE CASE: If it's not a container, check if it's a number to double
  if (typeof val !== 'object' || val === null) {
    return typeof val === 'number' ? val * 2 : val;
  }

  // 2. RECONSTRUCTION: Create the new "shell" (Array or Object)
  const newContainer = Array.isArray(val) ? [] : {};

  // 3. RECURSIVE STEP: Loop through keys/indices
  for (const key in val) {
    // Assign the result of the "dive" to the same key in our new container
    newContainer[key] = mapRecursive(val[key]);
  }

  return newContainer;
};

module.exports = mapRecursive;