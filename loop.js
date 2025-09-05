//oppgave 1

let i = 1;          
while (i <= 10) {    
  document.write(i);
  i++;               
}

for (let i = 1; i <= 10; i++) {
  document.write(i);
}


//oopgave 2 
let passord = prompt("Skriv passord:");
let forsøk = 0

while (forsøk < 3) {
  passord = prompt("Feil passord");
  forsøk++
}

if(forsøk > 3)
{
  document.write("For mange feil");
}
else{
document.write("Riktig passord!");
}


