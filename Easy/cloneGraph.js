function cloneGraph(node) {
    if (!node) return null;

    const seen = new Map();

    function dfs(current) {
        if (seen.has(current)) return seen.get(current);
        
        const copy = new Node(current.val);
        seen.set(current, copy);

        for (const neighbor of current.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }
    return dfs(node);
}