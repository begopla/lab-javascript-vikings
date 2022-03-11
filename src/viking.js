/**
   * *  this is main method
   * !this can be only static
   * ? do I need to check for exeception
   * todo to do things
   */

// Soldier
class Soldier {
  

  //*  THE CONSTRUCTOR SHOULD RECIEVE 2 ARGUMENTS - HEALTH AND STRENGTH
  constructor(health, strength){
    this.health = health;
    this.strength = strength
  }

  //* ATTACK METHOD {FUNCTION} - no arguments

  attack(){

    let soldierStrength = this.strength;
    return soldierStrength;
  }

  //*RECEIVE DAMAGE METHOD {FUCTION} - 1 ARGUMENT, THE DAMAGE
  receiveDamage(theDamage){

    this.health= this.health-theDamage
  }
}



// Viking
 class Viking extends Soldier{

    //* ADD ADDITION PROPERTY name, EXTENDING SOLDIER
    constructor( name, health, strength ){
     
      super(health, strength);
      this.name = name;
    }
  
    attack(){
      let vikingStrength= super.attack();
      return vikingStrength;
    }
  
    receiveDamage(newDamage){
      

      super.receiveDamage(newDamage);

      if(this.health>0){
        return `${this.name} has received ${newDamage} points of damage`
      }
       else{
          return `${this.name} has died in act of combat`}
}

  battleCry(){
    return "Odin Owns You All!"
  }
 
}

// Saxon
class Saxon extends Soldier {

attack(){
  let saxonStrength= super.attack();
      return saxonStrength;
}

receiveDamage(theDamage){

super.receiveDamage(theDamage);

if(this.health>0){
  return `A Saxon has received ${theDamage} points of damage`
}
 else{
    return "A Saxon has died in combat"
  }
}

}

// War
class War {


//*Object of arrays with all viking soldiers in the first argument and all saxon soldiers in second argument
  constructor(){
    this.vikingArmy =[];
    this.saxonArmy = [];
  }
  
addViking(vikingObject){
  this.vikingArmy.push(vikingObject)

}
addSaxon(saxonObject){
  this.saxonArmy.push(saxonObject)

}
vikingAttack(){
const anySaxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
const anyVikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
const index = this.saxonArmy.indexOf(anySaxonSoldier);
let resultVikingAttack= anySaxonSoldier.receiveDamage(anyVikingSoldier.strength)

if (anySaxonSoldier.health<=0){
this.saxonArmy.splice(index,1)
}

return resultVikingAttack;
}

saxonAttack(){
const anySaxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
const anyVikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
const vikingIndex = this.vikingArmy.indexOf(anyVikingSoldier);

let resultSaxonAttack = anyVikingSoldier.receiveDamage(anySaxonSoldier.strength)

//?how do I access the name of the Soldier??
if(anyVikingSoldier.health<=0){
  this.vikingArmy.splice(vikingIndex,1)
}
return resultSaxonAttack;
}

showStatus(){

  if (!this.saxonArmy.length){
    return "Vikings have won the war of the century!";
  }
  if (!this.vikingArmy.length){
    return "Saxons have fought for their lives and survived another day...";
  }
  if (this.vikingArmy.length>=1 && this.saxonArmy.length>=1){
    return "Vikings and Saxons are still in the thick of battle.";

  }
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
