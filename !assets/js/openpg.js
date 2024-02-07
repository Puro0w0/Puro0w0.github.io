const userAgent = navigator.userAgent;

var nice = "Nice bro";

if (navigator.userAgent.includes("Firefox")) {
    alert("Sorry, this page is not supported in Firefox.");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D";
} else if (userAgent.includes('Chrome')) {
    console.log(nice)
}
function cookie_clicker() {
    window.location.href = '/cookie-clicker/en';
}
function about_me() {
    window.location.href = '/about-me/fr';
}
