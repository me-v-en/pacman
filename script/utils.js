export function modulo(n, m) {
    var mod = ((n % m) + m) % m;
    return mod < 0 ? mod + Math.abs(m) : mod;
};

export const DIRECTION_MATRICES = {
    'LEFT' : [0, -1],
    'RIGHT' : [0, 1],
    'UP' : [-1, 0],
    'DOWN' : [1, 0]

}

export function addCoord(coord1, coord2) {
    if (coord1.length === coord2.length) {
        return coord1.map((value, index) => value += coord2[index]);
    }
};