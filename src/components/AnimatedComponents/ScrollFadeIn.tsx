import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import type { ReactNode, FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registramos el plugin una vez.
gsap.registerPlugin(ScrollTrigger);

// Definimos la interfaz para las props del componente.
interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

// Usamos FC (Functional Component) para tipar el componente.
const ScrollFadeIn: FC<ScrollFadeInProps> = ({
  children,
  delay = 0,
  duration = 1.5,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = componentRef.current;

    // Si el elemento no existe, no hacemos nada.
    if (!element) return;

    // Setea el estado inicial del elemento
    gsap.set(element, {
      opacity: 0,
      y: 50,
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, [delay, duration]);

  return (
    <div ref={componentRef} style={{ width: "100%", height: "auto" }}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
