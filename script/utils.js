export function modulo(n,m) {
    var mod = (( n % m) + m) % m;
    return mod < 0 ? mod + Math.abs(m) : mod;
};
