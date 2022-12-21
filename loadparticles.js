window.onload = function () {
    Particles.init({
        selector: '.background',
        minDistance: 150,


// options for breakpoints
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    maxParticles: 200,
                    minDistance: 100,
                }
            },
            {
                breakpoint: 800,
                options: {
                    maxParticles: 150,
                    minDistance: 100,
                }
            },
            {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                    minDistance: 50,
                }
            },
            {
                breakpoint: 380,
                options: {
                    maxParticles: 0
                }
            }
        ]
    });
};