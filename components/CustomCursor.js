'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    
    cursor.id = 'custom-cursor';
    follower.id = 'custom-follower';
    cursor.className = 'fixed w-3 h-3 bg-red rounded-full pointer-events-none z-[9998] hidden md:block';
    follower.className = 'fixed w-11 h-11 border-2 border-red/40 rounded-full pointer-events-none z-[9997] hidden md:block';
    
    cursor.style.transform = 'translate(-50%, -50%)';
    follower.style.transform = 'translate(-50%, -50%)';
    follower.style.transition = 'width 0.3s, height 0.3s';
    
    document.body.appendChild(cursor);
    document.body.appendChild(follower);
    
    let mx = 0, my = 0, fx = 0, fy = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };
    
    const animate = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(animate);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    animate();
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (cursor) cursor.remove();
      if (follower) follower.remove();
    };
  }, []);
  
  return null;
}