function countComponents(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const[u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let components = 0;

    function dfs(start) {
        const stack = [start];
        visited[start] = true;

        while(stack.length) {
            const node = stack.pop();
            for (const neighbor of graph[node]) {
                if (!visitied[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
    }

    for (let i=0; i < n; i++) {
        if(!visited[i]) {
            compoenent++;
            dfs(i);
        }
    }
    return components;
}