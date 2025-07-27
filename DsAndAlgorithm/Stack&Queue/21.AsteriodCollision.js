/*
  Loop through each asteroid:

  If the asteroid is positive, or the stack is empty, or the top of the stack is negative, push it.

  If the asteroid is negative, check for collisions with positive asteroids on top of the stack:
    If top of stack is smaller (positive but smaller than Math.abs(asteroid)), pop it (it explodes) and continue checking.
    If top of stack is equal in size, pop it and do not push the current asteroid (both explode).
    If top of stack is larger, the current asteroid is destroyed (do not push).
    
  At the end, the stack contains the final states.

*/

const astroidCollision = (asteroids) => {
  const n = asteroids.length;

  let st = new Array(n);
  let top = -1;

  for (let asteroid of asteroids) {
    if (asteroid > 0) st[++top] = asteroid;

    if (asteroid < 0) {
      const absAsteroid = Math.abs(asteroid);
      /*
        st is empty / st contains -ve asteroids,
        push the -ve asteroid 
      */
      if (top < 0 || st[top] < 0) {
        st[++top] = asteroid;
        continue;
      }

      while (st[top] > 0 && st[top] < absAsteroid) {
        top--;
      }

      /*
        st contains same magnitude +ve asteroid delete both asteroids 
      */
      if (st[top] > 0 && st[top] === absAsteroid) {
        top--;
        continue;
      }

      // st contains +ve asteroid > -ve asteroid
      if (st[top] > 0 && st[top] > absAsteroid) continue;

      // st is empty now
      st[++top] = asteroid;
    }
  }

  return st.slice(0, top + 1);
};

const asteroidCollisionCl = (asteroids) => {
  const n = asteroids.length;
  let st = new Array(n);
  let top = -1;

  for (let asteroid of asteroids) {
    if (asteroid > 0) {
      st[++top] = asteroid;
    } else {
      const absAsteroid = Math.abs(asteroid);
      let destroyed = false;

      while (top >= 0 && st[top] > 0) {
        if (st[top] < absAsteroid) {
          top--; // destroy the top asteroid
        } else if (st[top] === absAsteroid) {
          top--; // both destroyed
          destroyed = true;
          break;
        } else {
          // stack asteroid is bigger, so incoming one is destroyed
          destroyed = true;
          break;
        }
      }

      if (!destroyed) {
        st[++top] = asteroid;
      }
    }
  }

  return st.slice(0, top + 1);
};
