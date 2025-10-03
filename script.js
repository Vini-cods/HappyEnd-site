
        let curtainOpened = false;

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const curtainContainer = document.getElementById('curtainContainer');
            const curtainLeft = document.getElementById('curtainLeft');
            const curtainRight = document.getElementById('curtainRight');
            const curtainTop = document.getElementById('curtainTop');
            const curtainText = document.getElementById('curtainText');
            const scrollIndicator = document.getElementById('scrollIndicator');
            
            // Calcula o progresso do scroll (0 a 1)
            const maxScroll = 500; // Pixels necessários para abrir completamente
            const progress = Math.min(scrolled / maxScroll, 1);
            
            if (progress > 0 && !curtainOpened) {
                // Abertura horizontal das cortinas
                const translateX = progress * 100;
                
                // Move as cortinas para as laterais
                curtainLeft.style.transform = `translateX(-${translateX}%)`;
                curtainRight.style.transform = `translateX(${translateX}%)`;
                
                // Move a cortina superior para cima
                curtainTop.style.transform = `translateY(-${translateX}%)`;
                
                // Fade do texto da cortina
                curtainText.style.opacity = `${1 - progress}`;
                curtainText.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.3})`;
                
                // Esconde o indicador de scroll
                if (scrollIndicator) {
                    scrollIndicator.style.opacity = `${Math.max(0, 1 - progress * 2)}`;
                }
                
                // Remove completamente quando totalmente aberta
                if (progress >= 0.98) {
                    curtainOpened = true;
                    setTimeout(() => {
                        curtainContainer.style.display = 'none';
                        if (scrollIndicator) {
                            scrollIndicator.style.display = 'none';
                        }
                        // Permite scroll normal após abrir a cortina
                        document.body.style.height = 'auto';
                        document.body.style.minHeight = '100vh';
                    }, 500);
                }
            }
        });

        // Força scroll para o topo no carregamento
        window.addEventListener('load', function() {
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Smooth scroll para links da navegação
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
            });
        });

        // Previne comportamento estranho no carregamento
        document.addEventListener('DOMContentLoaded', function() {
            window.scrollTo(0, 0);
        });
