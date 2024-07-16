// Populate the submenu with browser and window information

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('appName').textContent = navigator.appName;
    document.getElementById('product').textContent = navigator.product;
    document.getElementById('appVersion').textContent = navigator.appVersion;
    document.getElementById('userAgent').textContent = navigator.userAgent;
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('language').textContent = navigator.language;

    document.getElementById('innerHeight').textContent = window.innerHeight;
    document.getElementById('innerWidth').textContent = window.innerWidth;

    document.getElementById('screenWidth').textContent = screen.width;
    document.getElementById('screenHeight').textContent = screen.height;
    document.getElementById('availWidth').textContent = screen.availWidth;
    document.getElementById('availHeight').textContent = screen.availHeight;
    document.getElementById('colorDepth').textContent = screen.colorDepth;
    document.getElementById('pixelDepth').textContent = screen.pixelDepth;

    document.getElementById('href').textContent = location.href;
    document.getElementById('hostname').textContent = location.hostname;
    document.getElementById('pathname').textContent = location.pathname;
    document.getElementById('protocol').textContent = location.protocol;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('latitude').textContent = position.coords.latitude;
            document.getElementById('longitude').textContent = position.coords.longitude;
        }, () => {
            document.getElementById('latitude').textContent = 'Geolocation access denied';
            document.getElementById('longitude').textContent = 'Geolocation access denied';
        });
    } else {
        document.getElementById('latitude').textContent = 'Geolocation not supported';
        document.getElementById('longitude').textContent = 'Geolocation not supported';
    }
});
