const mass = [400, 122, 132, 111, 1100, 688, 900];
mass.sort((b, a)=> a - b)

block = document.querySelector("div");
block.innerText = mass;