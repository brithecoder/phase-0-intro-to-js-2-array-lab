// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
  cats.push();

  function destructivelyAppendCat(name){
    name= cats.push("Ralph");
  }
  function destructivelyPrependCat(name){
      name= cats.unshift("Bob");
  }
  function destructivelyRemoveLastCat(name){
      name= cats.pop();
  
  }
  function destructivelyRemoveFirstCat(name){
      name= cats.shift();
  }
  function  appendCat(name){
      const copyCats = [...cats];
      copyCats.push(name);
      return copyCats
  }
 function prependCat(name){
     const  catsCopy =[ ...cats];
     catsCopy.unshift(name);
     return catsCopy
 }
  function removeLastCat(name){
      const copyOfCats =[...cats];
      copyOfCats.pop(name);
      return copyOfCats
  }
   function removeFirstCat(name){
       const catCop =[...cats];
       catCop.shift(name);
       return catCop
   }