var GET = location.search.split(/[?&]/).slice(1).map(function(paramPair) {
  return paramPair.split(/=(.+)?/).slice(0, 2);
}).reduce(function(obj, pairArray) {
  obj[pairArray[0]] = pairArray[1];
  return obj;
}, {});


var phone = GET.phone.replace(/\+/g, " ");

document.getElementById("phone").innerHTML = phone;

document.getElementById("oui").addEventListener("click", function() {
  promise.get("http://78.193.235.5/sms/" + phone + "/test from ui");
}, false);
