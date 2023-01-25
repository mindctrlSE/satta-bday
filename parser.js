let title = document.getElementById('head')
let gift = document.getElementById('gift')
let wishes = document.getElementById('wishes')

function hexToText(hexInput) {
    let hex = hexInput.toString();
    let str = '';
    for (let i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

title.innerHTML = hexToText('486170707920427269746864617920536174746121');
gift.innerHTML = hexToText('576520696E7669746520796F7520616E6420456D696C20746F20612066696B6120696E204E6F727274E46C6A652C207768656E6576657220796F752061726520667265652066726F6D20636F64696E672E');
wishes.innerHTML = hexToText('4265737420526567617264732C3C62723E546F6269617A2026205061747269636961');