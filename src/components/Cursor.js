import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export const Cursor = () => {
    const circle = useRef();
    
    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        };
        moveCircle(mouse.current.x, mouse.current.y);
    }
    
    const mouse = useRef({
        x: 0,
        y: 0
    });
    
    const moveCircle = (x, y) => {
        gsap.to(circle.current, { x:x, y:y,
        duration:0.7,
        ease:'power3.out'
        });
    }
    
    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => { window.removeEventListener("mousemove", manageMouseMove); }
    }, []);
    
    return (
        <div className='cursor' ref={circle}></div>
    );
}
