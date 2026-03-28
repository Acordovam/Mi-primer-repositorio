const btn = document.getElementById('btn-action');
const branchLabel = document.getElementById('branch-name');

btn.addEventListener('click', () => {
    const newBranch = prompt("¿A qué rama quieres saltar?");
    if (newBranch) {
        branchLabel.innerText = newBranch;
        branchLabel.style.color = "#3010e9";
        console.log(`Cambiando contexto a: ${newBranch}`);
    }
});