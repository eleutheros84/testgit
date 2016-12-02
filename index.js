"use strict"

var fn_init = function(){
  let lignesCodes = [];
  let clients = [{name:'client1', code:'cl1'},{name:'client2', code:'cl2'}];
  let tva = [2, 10, 20.6];

  for(let i = 0; i < 1000; i++){
    let idxTva = Math.round(Math.random() * 2);
    let myTva = tva[idxTva];
    let idxClients = Math.round(Math.random() * (clients.length - 1));
    let myClients = clients[idxClients];
    let montHt = Math.random() * 1000;
    lignesCodes.push([myClients, myTva, montHt]);
  }
  return lignesCodes;
}
console.log(fn_init());
