
// ============= STAGGER =============
function staggerEntry(entries, index) {
  entries.forEach(function (entry, index) {
    if (entry.isIntersecting === true) {
      setTimeout(function () {
        entry.target.classList.add("is-showing");
      }, 150 * (index + 1));
    }
    else {
        entry.target.classList.remove("is-showing");
    }
  });
}
var staggerOptions = {};
var staggerObserver = new IntersectionObserver(staggerEntry, staggerOptions);
var staggerItems = document.querySelectorAll(".stagger-item");

staggerItems&&staggerItems.forEach(function (item, index) {
  staggerObserver.observe(item);
});





// ============= FADE =============
function fadeEntry(entries, index) {
  entries.forEach(function (entry, index) {
    console.log(entry)
    if (entry.isIntersecting === true) {
      entry.target.classList.add("is-showing");
    }
    else {
        entry.target.classList.remove("is-showing");
    }
  });
}

var fadeOptions = {};
var fadeObserver = new IntersectionObserver(fadeEntry, fadeOptions);
var fadeItems = document.querySelectorAll(".fade-item");

fadeItems&&fadeItems.forEach(function (item, index) {
  fadeObserver.observe(item);
});


