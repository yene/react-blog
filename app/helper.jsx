/*
  use exported functions by importing them (duh)
  import * as Helper from "./helper";


*/


export function transformFilename(filename) {
  return capitalize(removeDash(removeExtension(filename)));
}

export function formatDate(d) {
  let date = new Date(d);
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  return day + '.' + (monthIndex+1) + '.' + year
}

function removeExtension(s) {
  return s.replace('.md', '')
}

function removeDash(s) {
  return s.split('-').join(' ')
}

function capitalize(s) {
  return s.split(' ').map( v => {
    return v.charAt(0).toUpperCase() + v.slice(1);
  }).join(' ')
}
