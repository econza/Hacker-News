// export function formatDate(ts) {
  
//     var d=new Date();  // Gets the current time
//     var nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
//     var seconds = nowTs-ts;
  
//     // more that two days
//     if (seconds > 2*24*3600) {
//        return "a few days ago";
//     }
//     // a day
//     if (seconds > 24*3600) {
//        return "yesterday";
//     }
  
//     if (seconds > 3600) {
//        return "a few hours ago";
//     }
//     if (seconds > 1800) {
//        return "Half an hour ago";
//     }
//     if (seconds > 60) {
//        return Math.floor(seconds/60) + " minutes ago";
//     }
//   }

  export function formatDate(someDateInThePast) {
    var result = '';
    var difference = Date.now() - someDateInThePast;

    if (difference < 5 * 1000) {
        return 'just now';
    } else if (difference < 90 * 1000) {
        return 'moments ago';
    }

    //it has minutes
    if ((difference % 1000 * 3600) > 0) {
        if (Math.floor(difference / 1000 / 60 % 60) > 0) {
            let s = Math.floor(difference / 1000 / 60 % 60) == 1 ? '' : 's';
            result = `${Math.floor(difference / 1000 / 60 % 60)} minute${s} `;
        }
    }

    //it has hours
    if ((difference % 1000 * 3600 * 60) > 0) {
        if (Math.floor(difference / 1000 / 60 / 60 % 24) > 0) {
            let s = Math.floor(difference / 1000 / 60 / 60 % 24) == 1 ? '' : 's';
            result = `${Math.floor(difference / 1000 / 60 / 60 % 24)} hour${s}${result == '' ? '' : ' '} ` + result;
        }
    }

    // //it has days
    // if ((difference % 1000 * 3600 * 60 * 24) > 0) {
    //     if (Math.floor(difference / 1000 / 60 / 60 / 24) > 0) {
    //         let s = Math.floor(difference / 1000 / 60 / 60 / 24) == 1 ? '' : 's';
    //         result = `${Math.floor(difference / 1000 / 60 / 60 / 24)} day${s}${result == '' ? '' : ' '} ` + result;
    //     }

    // }

    return result + ' ago';
}