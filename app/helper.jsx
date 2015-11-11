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
  let days = Math.floor(diff / (1000*60*60*24))
  if (days == 0) {
    let hrs = Math.floor(diff / (1000*60*60))
    if (hrs == 0) {
      let minutes = Math.floor(diff / (1000*60))
      return minutes + " minutes ago"
    }
    return hrs + " hours ago"
  }

  if (days > 5) {
    if (date.getFullYear() != now.getFullYear()) {
      return month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(); // Dec 9, 2014
    }

    return month[date.getMonth()] + " " + date.getDate(); // Dec 9
  }

  return days + " days ago";
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
