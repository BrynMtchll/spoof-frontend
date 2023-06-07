import { useRef, useEffect,  } from 'react';

import { Box } from '@mui/material'

export default function LandingVisual() {
  const canvasRef = useRef(null);
  const context = useRef(null);
  const incrementor = useRef(0);
  const height = useRef(0);
  const width = useRef(0);
  const frequency = 1;
  const pointGap = 20;

  function calcSineY(x, amplitude) {
    return amplitude + 2 - amplitude * Math.sin( x * 2 * Math.PI * (frequency / width.current) );
  }

  const drawWave = (amplitude) => {
    const ctx = context.current;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255, 105, 180, 0.8)"; 
  
    for(let i = 0; i < width.current; i += pointGap){ 
      let y = calcSineY(incrementor.current - i, amplitude);
      y = y / 2;

      if (y > 0) ctx.moveTo(i,y - 2);
      else ctx.moveTo(i,y+2);
      
      ctx.lineTo(i,y);
    }
    ctx.stroke();
  }


  const renderFrame = () => {
    context.current.clearRect( 0, 0, width.current, height.current * 2)

    // sine wave evolves at the rate of the incrementor
    incrementor.current += width.current / 5000;

    drawWave(height.current);
    drawWave(height.current * 2 / 3);
    drawWave(height.current / 3);
  }

  const tick = () => {
    if (!canvasRef.current) return;

    renderFrame();
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    context.current = canvasRef.current.getContext("2d");

    const handleResize = e => {
      context.current.canvas.width = window.innerWidth;
      context.current.canvas.height = 51 + window.innerWidth / 10;
      height.current = 50 + window.innerWidth / 10;
      width.current = window.innerWidth;
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    requestAnimationFrame(tick);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return(
    <Box sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 1,
      height: {xs: 200, md: 300, lg: 400},
    }}>
      <canvas style={{backgroundColor: 'none'}} ref={canvasRef} />
    </Box>
  ) 
  
}