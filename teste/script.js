document.addEventListener('DOMContentLoaded', () => {
    const nodes = [];
    const edges = [];
    const canvas = document.getElementById('canvas');

    document.getElementById('addNodeBtn').addEventListener('click', () => {
        const nodeName = prompt('Nome do Nó:');
        if (nodeName) {
            nodes.push({ id: nodes.length, label: nodeName });
            drawGraph();
        }
    });

    document.getElementById('addEdgeBtn').addEventListener('click', () => {
        const node1 = prompt('Nome do Nó 1:');
        const node2 = prompt('Nome do Nó 2:');
        if (node1 && node2) {
            const node1Id = nodes.find(node => node.label === node1)?.id;
            const node2Id = nodes.find(node => node.label === node2)?.id;
            if (node1Id !== undefined && node2Id !== undefined) {
                edges.push({ from: node1Id, to: node2Id });
                drawGraph();
            } else {
                alert('Um ou ambos os nós não foram encontrados.');
            }
        }
    });

    document.getElementById('drawBtn').addEventListener('click', drawGraph);

    function drawGraph() {
        canvas.innerHTML = '';
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => {
            const x = Math.random() * (canvas.width - 50) + 25;
            const y = Math.random() * (canvas.height - 50) + 25;
            node.x = x;
            node.y = y;
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = '#007bff';
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(node.label, x, y);
        });

        edges.forEach(edge => {
            const fromNode = nodes.find(node => node.id === edge.from);
            const toNode = nodes.find(node => node.id === edge.to);
            if (fromNode && toNode) {
                ctx.beginPath();
                ctx.moveTo(fromNode.x, fromNode.y);
                ctx.lineTo(toNode.x, toNode.y);
                ctx.stroke();
            }
        });
    }
});
