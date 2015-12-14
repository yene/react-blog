/*
  use exported functions by importing them (duh)
  import * as Helper from "./helper";
*/


export function transformFilename(filename) {
  return capitalize(removeDash(removeExtension(filename)));
}

export function formatDate(d) {
  let date = new Date(d);
  return date.toISOString();
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  return year + '-' + (monthIndex+1) + '-' + day;
}

// datetime format should be YYYY-MM-DDThh:mm:ssTZD
// -> new Date("30 July 2010 15:05 UTC").toISOString();
export function mediumDate(d) {
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let date = new Date(d);
  let now = new Date();
  let diff = now - date;

  let sec = Math.floor(diff / (1000))
  if (sec < 60) {
    return `${sec} seconds ago`;
  }

  let min = Math.floor(diff / (1000*60))
  if (min < 60) {
    if (min == 1) {
      return `1 minute ago`;
    }
    return `${min} minutes ago`;
  }

  let hrs = Math.floor(diff / (1000*60*60))
  if (hrs < 60) {
    if (hrs == 1) {
      return `1 hours ago`;
    }
    return `${hrs} hours ago`;
  }

  let days = Math.floor(diff / (1000*60*60*24))
  if (days <= 5) {
    if (days == 1) {
      return `1 day ago`;
    }
    return `${days} days ago`;
  }

  if (date.getFullYear() == now.getFullYear()) {
    return month[date.getMonth()] + ' ' + date.getDate(); // Dec 9
  }

  return month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(); // Dec 9, 2014
}

function removeExtension(s) {
  return s.replace('.md', '');
}

function removeDash(s) {
  return s.split('-').join(' ');
}

function capitalize(s) {
  return s.split(' ').map( v => {
    return v.charAt(0).toUpperCase() + v.slice(1);
  }).join(' ');
}
