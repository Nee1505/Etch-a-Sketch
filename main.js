const container = document.querySelector("#container");


for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.width = "82px";
    div.style.height = "82px";
    div.style.border = "1px solid black";

    div.addEventListener('mouseenter', ()=> {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

}

const btn = document.querySelector('button');


btn.addEventListener('click', () => {
   let gridSize = prompt("Enter the Number of squares per side");

   do {
        gridSize = prompt("Enter number of squares per side (1-100)");
    } while(isNaN(gridSize) || gridSize <= 0 || gridSize > 100);


   container.replaceChildren();
   let divSize = 1600/(gridSize);
   

   for(let i=0; i<gridSize*gridSize; i++){
       const div = document.createElement('div');
       container.appendChild(div);
       div.style.width = divSize + 'px';
       div.style.height = divSize + 'px';
       div.style.border = "1px solid black";

       div.addEventListener('mouseenter', ()=> {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

   }

   
});