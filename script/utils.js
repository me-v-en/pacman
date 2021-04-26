export function modulo(n, m) {
    var mod = ((n % m) + m) % m;
    return mod < 0 ? mod + Math.abs(m) : mod;
};

export const DIRECTION_MATRICES = {
    'LEFT' : [-1, 0],
    'RIGHT' : [1, 0],
    'UP' : [0, -1],
    'DOWN' : [0, 1]

}

export function getDirectionFromCoord(coord){
    return Object.entries(DIRECTION_MATRICES).find(([direction, directionCoord])=>{
        return compareArrays(coord, directionCoord);
    })[0];
    

}

export function addCoord(coord1, coord2) {
    return coord1.map((value, index) => value += coord2[index]);
};

export function substractCoord(coord1, coord2) {
    return coord1.map((value, index) => value -= coord2[index]);
};

export function distanceBetweenCoords(coord1, coord2) {
    let part1 = Math.pow(coord1[0] - coord2[0], 2);
    let part2 = Math.pow(coord1[1] - coord2[1], 2);
    return Math.sqrt(part1 + part2);
};

export function compareArrays(a, b){
  // if length is not equal
  if(a.length != b.length)   return false;

  // comapring each element of array
   for(var i=0;i<a.length;i++){
   if(a[i]!=b[i]) return false;
   }
    return true;
  }