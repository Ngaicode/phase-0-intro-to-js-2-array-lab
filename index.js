// Write your solution here!
"use strict";
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop();
}

function destructivelyRemoveFirstCat(name) {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
