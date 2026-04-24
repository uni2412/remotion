import React from 'react';
import { Composition } from 'remotion';
import { VideoSegundaGraduacao } from './VideoSegundaGraduacao';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="VideoSegundaGraduacao"
        component={VideoSegundaGraduacao}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
