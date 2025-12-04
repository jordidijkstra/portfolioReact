import React from "react"
import '../css/bike.css'

export default function Bike(props){
    const containerRef = props.containerRef;
    const bikeRef = React.useRef(null);
    const bikeTrackRef = React.useRef(null);
    const lastScrollTopRef = React.useRef(0);

    const checkProjectAnimations = React.useCallback((bikeTop) => {
        const container = containerRef.current;
        if (!container) return;

    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Bereken de absolute positie van het project binnen de container
      const itemTop = itemRect.top - containerRect.top + container.scrollTop;
      const itemBottom = itemTop + itemRect.height;
      
      // Bereken fiets positie relatief tot de container
      const bikeAbsoluteTop = bikeTop + container.scrollTop;
      
      // Animatie start wanneer fiets het project bereikt, stopt wanneer fiets voorbij is
      if (bikeAbsoluteTop >= itemTop && bikeAbsoluteTop <= itemBottom) {
        item.classList.add('animate-in');
      } else {
        item.classList.remove('animate-in');
      }
    });
    }, []);

    const moveBike = React.useCallback(() => {
        const container = containerRef.current;
        const bike = bikeRef.current;
        const bikeTrack = bikeTrackRef.current;
    
        if (!container || !bike || !bikeTrack) return;

        const scrollTop = container.scrollTop;
        const footer = document.querySelector('footer');
        const footerHeight = footer ? footer.offsetHeight : 0;
        const docHeight = container.scrollHeight - container.clientHeight - footerHeight;
    
        // percentage scroll tussen 0 en 1
        const scrollPercent = Math.min(scrollTop / docHeight, 1);
        
        // maximale verplaatsing: container hoogte - bike hoogte - start offset - footer
        const bikeHeight = bike.offsetHeight;
        const startOffset = 75;
        const maxTop = container.clientHeight - bikeHeight - startOffset - footerHeight;
        
        // positie fiets op basis van scrollpercentage
        const bikeTop = startOffset + scrollPercent * maxTop;
        bike.style.top = `${bikeTop}px`;
        bikeTrack.style.height = `${bikeTop - 28}px`;
    
        // Fade out header-content on scroll (only on desktop > 999px)
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            if (window.innerWidth > 999) {
                // Fade out over first 300px of scroll
                const fadeDistance = 300;
                const opacity = Math.max(0, 1 - (scrollTop / fadeDistance));
                headerContent.style.opacity = opacity;
            } else {
                // Reset opacity for mobile/tablet
                headerContent.style.opacity = 1;
            }
        }
    
        // Detecteer scroll richting en draai de fiets
        const lastScrollTop = lastScrollTopRef.current;
        
        if (scrollTop === 0) {
        // Top van de pagina - fiets wijst naar beneden
        bike.style.transform = 'rotate(90deg) scaleY(-1)';
        } else if (scrollTop >= docHeight) {
        // Bottom van de pagina - fiets wijst naar boven
        bike.style.transform = 'rotate(270deg) scaleY(1)';
        } else if (scrollTop > lastScrollTop) {
        // Scroll naar beneden - fiets wijst naar beneden
        bike.style.transform = 'rotate(90deg) scaleY(-1)';
        } else if (scrollTop < lastScrollTop) {
        // Scroll naar boven - fiets wijst naar boven
        bike.style.transform = 'rotate(270deg) scaleY(1)';
        }
    
        lastScrollTopRef.current = scrollTop;
    
        // Check welke projecten geanimeerd moeten worden op basis van fiets positie
        checkProjectAnimations(bikeTop);
    }, [checkProjectAnimations]);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Add event listeners
        container.addEventListener('scroll', moveBike);
        window.addEventListener('resize', moveBike);
        
        // Initial call
        moveBike();

        // Cleanup function
        return () => {
        container.removeEventListener('scroll', moveBike);
        window.removeEventListener('resize', moveBike);
        };
    }, [moveBike]);

    return(
        <>
            <div ref={bikeTrackRef} id="bike-track"></div>
            <div ref={bikeRef} id="bike">
                <span id="bike-icon"><i className="fa-solid fa-bicycle"></i></span>
            </div>
        </>
    )
}