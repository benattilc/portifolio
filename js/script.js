const sr = ScrollReveal ({
    distance: '35px',
    duration: 2400,
    reset:true
});

sr.reveal('.logo', {delay:210, origin:'left'});
sr.reveal('.nav-list', {delay:310, origin:'top'});
sr.reveal('.top-btnn', {delay:410, origin:'right'});

sr.reveal('.main-content h4', {delay:510, origin:'top'});
sr.reveal('.main-content h1', {delay:610, origin:'left'});
sr.reveal('.main-content p', {delay:710, origin:'right'});
sr.reveal('.social-media', {delay:810, origin:'left'});
sr.reveal('.main-btn', {delay:910, origin:'top'});

sr.reveal('.footer', {delay:1010, origin:'bottom'});