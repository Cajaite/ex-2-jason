"use strict";


let prenoms=["bachibouzouk","sandrine","sevrine","nathalie","gwendoline"]; // variable du nom des personnages



class characteristics{
    constructor(name,attack,die,dieAttack){ // création des paramètres de nom d'attaque, de mort et de l'attaque avant de die des personnages.
        this.name=name;
        this.attack=attack;
        this.die=die;
        this.dieAttack=dieAttack;
    } 
}


let alcolique=new characteristics('alcolique',0.1,0.8,0.1); // creations de pourcentage d'attaque, de mort, et de l'attaque avant de die
let atlhetique=new characteristics('atlhetique',0.6,0.1,0.3);
let artiste=new characteristics('artiste',0.2,0.4,0.4);
let roux=new characteristics('roux',0.3,0.4,0.3);
let nain=new characteristics('nain',0.5,0.3,0.2);



let caractéristiques=[alcolique,atlhetique,artiste,roux,nain]; // creations de la liste de toute les caractéristiques des survivants 
class survivor{
    constructor(name,characteristics){ // creations des paramètres des survivants nom, characteristics, et de mort
        this.name=name;
        this.characteristics=characteristics;
        this.dead=false;
    }
}



let survivor1=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)]) // générération aléatoire des nom et des caractéristiques dans les tableaux 
let survivor2=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let survivor3=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let survivor4=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let survivor5=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let morts=[]



console.log(survivor1,survivor.characteristics); // permet d'afficher les prénoms et les  caractéristiques de chaque survivants
console.log(survivor2,survivor.characteristics);
console.log(survivor3,survivor.characteristics);
console.log(survivor4,survivor.characteristics);
console.log(survivor5,survivor.characteristics);




class killer{
    constructor(name,hp){ // creation des paramètres du tueur nom et point de vie
        this.name=name
        this.hp=hp
    }
    attackSurvivor(survivor){ // creation des paramtres qui permet d'attaquer 
        let action=Math.random();
        if(action>survivor.characteristics.attack){
            this.hp = this.hp-10
            console.log(survivor.name + " esquive l attaque et inflige 10 de dégâts à " + this.name );
            console.log("il reste " + this.hp + " points de vie à " + this.name);
        }
        else if(action<survivor.characteristics.dieAttack){  // variable dieAttack le survivant meurt mais inflige des dégats
            survivor.dead=true
            this.hp = this.hp-15
            console.log(survivor.name + " meurt et inflige 15 de dégâts à " + this.name);
            console.log("il reste " + this.hp + " points de vie à " + this.name);
            morts.push(survivor.name);
        }
        else{
            survivor.dead=true
            console.log(this.name + " a tué " + survivor.name); // annonce le personnage qui a été tué 
            morts.push(survivor.name); // enleve le personnage mort du tableaux 
        }
    }
}



let tueur=new killer("Jason",100); // creation de la variable du tueur, paramètre des points de vies de jason 
let survivors=[survivor1,survivor2,survivor3,survivor4,survivor5]; // creation du tableau des survivants
let deathCount=0 // creation du compteur de mort des survivants 



while(tueur.hp>=0){ // tant que le tueur est vivant la boucle continue
    for(let survivor of survivors){
        if(survivor.dead===true){ // if = si    un des survivants meurt
            deathCount=deathCount+1 // il faut ajouter 1 au compteur de morts
        }
    }
    if(deathCount===survivors.length){ // si le compteur de morts arrive au même nombre d'éléments dans le tableau (le nombre de survivants=5)
        console.log("Jason a gagné avec " + tueur.hp + " points de vie !");
        break; // pour mettre fin à la boucle
    }else{
        deathCount=0 // sinon reset à 0 et recommencer la boucle le deathCount ne doit pas depasser 5 
    }
    for(let survivor of survivors){ // pour tout les survivants
        if(survivor.dead===false){ // si les survivants sont  encore vivants
            tueur.attackSurvivor(survivor); // le tueur  peut les attaqués 
            if(tueur.hp<0){
                console.log("Les survivants ont gagné mais RIP à " + morts); // annonce la victoire des survivants et tout les survivants morts 
                break;
            }
        }
    }
}



for(let survivor of survivors){
    if(survivor.dead===false){ // si les survivants sont morts ou non
        console.log(survivor.name + " est en vie "); // annonce les survivants encore en vie
    }
}



for(let survivor of survivors){
    if(survivor.dead===true){
        morts.push(survivor.name); // enleve les personnages mort du tableaux 
    }
}