var t = document.querySelector('textarea')
var text = document.getElementById('text').innerHTML


t.addEventListener('input', function() {
    t.value = text.slice(0, t.value.length)
});
