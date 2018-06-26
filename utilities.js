const remapInternationalCharToAscii = (c) => {
    if ("àåáâäãåą".includes(s)) {
        return "a";
    }
    else if ("èéêëę".includes(s)) {
        return "e";
    }
    else if ("ìíîïı".includes(s)) {
        return "i";
    }
    else if ("òóôõöøőð".includes(s)) {
        return "o";
    }
    else if ("ùúûüŭů".includes(s)) {
        return "u";
    }
    else if ("çćčĉ".includes(s)) {
        return "c";
    }
    else if ("żźž".includes(s)) {
        return "z";
    }
    else if ("śşšŝ".includes(s)) {
        return "s";
    }
    else if ("ñń".includes(s)) {
        return "n";
    }
    else if ("ýÿ".includes(s)) {
        return "y";
    }
    else if ("ğĝ".includes(s)) {
        return "g";
    }
    else if (c == 'ř') {
        return "r";
    }
    else if (c == 'ł') {
        return "l";
    }
    else if (c == 'đ') {
        return "d";
    }
    else if (c == 'ß') {
        return "ss";
    }
    else if (c == 'Þ') {
        return "th";
    }
    else if (c == 'ĥ') {
        return "h";
    }
    else if (c == 'ĵ') {
        return "j";
    }
    else {
        return "";
    }
}

const urlFriendly = (title) => {
    if (!title)
        return "";

    title = title.toLowerCase();
    const maxlen = 80;
    const len = title.length;
    let prevdash = false;
    const sb = [];

    for (let i = 0; i < len; i++) {
        const c = title.charAt(i);
        
        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
            sb.push(c);
            prevdash = false;
        }
        else if (c == ' ' || c == ',' || c == '.' || c == '/' ||
            c == '\\' || c == '-' || c == '_' || c == '=') {
            if (!prevdash && sb.length > 0) {
                sb.push('-');
                prevdash = true;
            }
        }
        else if (c.charCodeAt() >= 128) {
            const prevlen = sb.length;
            sb.push(remapInternationalCharToAscii(c));
            if (prevlen != sb.length)
                prevdash = false;
        }
        if (i == maxlen)
            break;
    }

    if (prevdash)
        sb.pop();
    
    return sb.join("");
}

module.exports = urlFriendly;
