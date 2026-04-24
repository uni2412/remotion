import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from 'remotion';

export const VideoSegundaGraduacao: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Cena 1: Introdução - 0 a 90 frames (3 segundos) */}
      <Sequence from={0} durationInFrames={90}>
        <CenaIntro />
      </Sequence>

      {/* Cena 2: Informações - 90 a 180 frames */}
      <Sequence from={90} durationInFrames={90}>
        <CenaInfo />
      </Sequence>

      {/* Cena 3: Call to Action - 180 a 300 frames */}
      <Sequence from={180} durationInFrames={120}>
        <CenaCTA />
      </Sequence>
    </AbsoluteFill>
  );
};

// Cena 1: Introdução
const CenaIntro: React.FC = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = interpolate(frame, [0, 30], [0.8, 1]);
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1e40af',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <h1
        style={{
          fontSize: 100,
          color: 'white',
          textAlign: 'center',
          transform: `scale(${scale})`,
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        }}
      >
        Segunda Graduação 🎓
      </h1>
    </AbsoluteFill>
  );
};

// Cena 2: Informações
const CenaInfo: React.FC = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const translateY = interpolate(frame, [0, 30], [50, 0]);
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#7c3aed',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
        opacity,
      }}
    >
      <div style={{ transform: `translateY(${translateY}px)` }}>
        <h2
          style={{
            fontSize: 80,
            color: 'white',
            textAlign: 'center',
            marginBottom: 40,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Expanda seus conhecimentos
        </h2>
        <p
          style={{
            fontSize: 40,
            color: '#e0e7ff',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.5,
          }}
        >
          ✓ Nova área de atuação<br />
          ✓ Crescimento profissional<br />
          ✓ Mais oportunidades
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Cena 3: Call to Action
const CenaCTA: React.FC = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const pulse = Math.sin(frame * 0.1) * 0.1 + 1;
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#059669',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 70,
            color: 'white',
            marginBottom: 50,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Comece hoje mesmo!
        </h2>
        <div
          style={{
            backgroundColor: 'white',
            color: '#059669',
            padding: '30px 60px',
            borderRadius: 50,
            fontSize: 50,
            fontWeight: 'bold',
            transform: `scale(${pulse})`,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          INSCREVA-SE
        </div>
      </div>
    </AbsoluteFill>
  );
};
