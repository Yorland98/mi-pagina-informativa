
        // Animación de aparición gradual
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.2s';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observar elementos para animación
        document.querySelectorAll('.section, .header').forEach(el => {
            observer.observe(el);
        });

        // Animación de las tarjetas de certificación
        document.querySelectorAll('.certification-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });

        // Efecto de hover para las tarjetas
        document.querySelectorAll('.certification-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Animación de partículas flotantes
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            document.querySelector('.particles').appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Crear partículas periódicamente
        setInterval(createParticle, 1000);

        // Función para imprimir
        function printCV() {
            window.print();
        }