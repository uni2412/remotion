import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence, spring, useVideoConfig, Img } from 'remotion';

export const VideoSegundaGraduacao: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Cena 1: GANCHO - 0 a 75 frames (2.5s) */}
      <Sequence from={0} durationInFrames={75}>
        <CenaGancho />
      </Sequence>

      {/* Cena 2: PROBLEMA - 75 a 150 frames */}
      <Sequence from={75} durationInFrames={75}>
        <CenaProblema />
      </Sequence>

      {/* Cena 3: PLOT TWIST - 150 a 240 frames */}
      <Sequence from={150} durationInFrames={90}>
        <CenaPlotTwist />
      </Sequence>

      {/* Cena 4: BENEFÍCIOS - 240 a 390 frames */}
      <Sequence from={240} durationInFrames={150}>
        <CenaBeneficios />
      </Sequence>

      {/* Cena 5: LOGO UNISAFER - 390 a 510 frames */}
      <Sequence from={390} durationInFrames={120}>
        <CenaLogo />
      </Sequence>

      {/* Cena 6: CTA FINAL - 510 a 630 frames */}
      <Sequence from={510} durationInFrames={120}>
        <CenaCTA />
      </Sequence>
    </AbsoluteFill>
  );
};

// ==========================================
// CENA 1: GANCHO IMPACTANTE
// ==========================================
const CenaGancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const palavras = ['Quer', 'dar', 'aula', 'mas', 'não', 'tem', 'licenciatura?', '🤔'];
  
  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {palavras.map((palavra, index) => {
          const delay = index * 8;
          const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
          const scale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 200 },
          });

          return (
            <span
              key={index}
              style={{
                fontSize: index === palavras.length - 1 ? 100 : 70,
                color: 'white',
                fontWeight: 'bold',
                display: 'inline-block',
                margin: '0 15px',
                opacity,
                transform: `scale(${scale})`,
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {palavra}{' '}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// CENA 2: PROBLEMA
// ==========================================
const CenaProblema: React.FC = () => {
  const frame = useCurrentFrame();

  const rotate = interpolate(frame, [0, 75], [0, 360]);
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#f97316',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 90,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 30,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Graduação tradicional
        </h1>
        <div
          style={{
            fontSize: 200,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          ⏰
        </div>
        <h1
          style={{
            fontSize: 120,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 30,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          4 ANOS 😰
        </h1>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// CENA 3: PLOT TWIST
// ==========================================
const CenaPlotTwist: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 100, mass: 0.5 },
  });

  // Efeito de confete
  const confetes = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)],
    delay: i * 2,
  }));

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Confetes */}
      {confetes.map((confete, i) => {
        const y = interpolate(frame - confete.delay, [0, 60], [-10, 110]);
        const opacity = interpolate(frame - confete.delay, [0, 10, 50, 60], [0, 1, 1, 0]);

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${confete.x}%`,
              top: `${y}%`,
              width: 20,
              height: 20,
              backgroundColor: confete.color,
              opacity,
              borderRadius: 4,
            }}
          />
        );
      })}

      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <h1
          style={{
            fontSize: 70,
            color: 'white',
            marginBottom: 20,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          E se eu te contar que
        </h1>
        <h1
          style={{
            fontSize: 110,
            color: '#fff700',
            fontWeight: 'bold',
            transform: `scale(${scale})`,
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          DÁ EM 18 MESES? 🤯
        </h1>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// CENA 4: BENEFÍCIOS
// ==========================================
const CenaBeneficios: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const beneficios = [
    { texto: '✓ Pedagogia para Magistério', delay: 0 },
    { texto: '✓ 18 meses = METADE do tempo!', delay: 30 },
    { texto: '✓ Diploma reconhecido MEC', delay: 60 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {beneficios.map((item, index) => {
          const scale = spring({
            frame: frame - item.delay,
            fps,
            config: { damping: 200 },
          });
          const opacity = interpolate(frame - item.delay, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

          return (
            <h1
              key={index}
              style={{
                fontSize: 75,
                color: '#4ade80',
                fontWeight: 'bold',
                marginBottom: 40,
                transform: `scale(${scale})`,
                opacity,
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {item.texto}
            </h1>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// CENA 5: LOGO UNISAFER
// ==========================================
const CenaLogo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#3b82f6',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Logo como SVG (formato do escudo da Unisafer) */}
        <div
          style={{
            width: 400,
            height: 400,
            backgroundColor: 'white',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: `scale(${scale})`,
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 180, color: '#3b82f6', fontWeight: 'bold' }}>S</div>
        </div>
        <h1
          style={{
            fontSize: 80,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          UNISAFER
        </h1>
        <p
          style={{
            fontSize: 50,
            color: '#e0e7ff',
            marginTop: 20,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Sua carreira em 18 meses
        </p>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// CENA 6: CTA FINAL
// ==========================================
const CenaCTA: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = Math.sin(frame * 0.2) * 0.15 + 1;
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 100,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 50,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Começa AGORA! 👇
        </h1>
        <div
          style={{
            backgroundColor: 'white',
            color: '#11998e',
            padding: '40px 100px',
            borderRadius: 60,
            fontSize: 70,
            fontWeight: 'bold',
            transform: `scale(${pulse})`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          LINK NA BIO
        </div>
      </div>
    </AbsoluteFill>
  );
};
