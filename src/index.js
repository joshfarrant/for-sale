function upperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

window.onload = function() {
  var domain = window.location.hostname;
  var prettyDomain = upperCaseFirstLetter(domain);
  var heading = document.getElementById('heading');
  heading.innerHTML = prettyDomain;
  document.title = prettyDomain;
}
