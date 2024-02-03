document.addEventListener('DOMContentLoaded', function () {
    var floatingButton = document.querySelector('.floating__button');
    var overlay = document.querySelector('.overlay');
    var body = document.body;

    floatingButton.addEventListener('click', function () {
        // Toggle classes to show/hide overlay
        floatingButton.classList.toggle('darken');
        overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';

        // Toggle overflow property to disable/enable scrolling
        body.style.overflow = (body.style.overflow === 'hidden') ? '' : 'hidden';

        
        // Oculta a lista de opções quando o botão é clicado novamente
        var optionsList = document.querySelector('.floating__button-options');
        optionsList.style.display = optionsList.style.display == 'block' ? 'none' : 'block';

    });

    overlay.addEventListener('click', function () {
        // Hide overlay when clicked outside the floating button
        floatingButton.classList.remove('darken');
        overlay.style.display = 'none';

        // Enable scrolling when overlay is hidden
        body.style.overflow = '';

        // Oculta a lista de opções quando o overlay é clicado
        var optionsList = document.querySelector('.floating__button-options');
        optionsList.style.display = 'none';
    });
});