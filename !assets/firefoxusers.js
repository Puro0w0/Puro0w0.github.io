const userAgent = navigator.userAgent;

var nice = "Nice bro";

if (navigator.userAgent.includes("Firefox")) {
    alert("Sorry, Firefox aren't allowed on this site, have fun being rick rolled!");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D";
} else if (userAgent.includes('Chrome')) {
    console.log(nice)
}
