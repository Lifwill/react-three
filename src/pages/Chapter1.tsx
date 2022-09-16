import { Canvas } from '@react-three/fiber';
import React from 'react';
import MainMenu from '../components/MainMenu';

const Chapter1 = () => {
  return (
    <div>
      <h1>Chapter 1</h1>
      <MainMenu />
      <div style={{ height: window.innerHeight, width: window.innerWidth }}>
        <Canvas
          camera={{ fov: 75, position: [-30, 40, 30] }}
          style={{ backgroundColor: '#000000' }}
        >
          <axesHelper scale={20} />
          <mesh position={[15, 0, 0]} rotation={[-0.5 * Math.PI, 0, 0]}>
            <planeGeometry args={[60, 20]} />
            <meshBasicMaterial color="#AAAAAA" />
          </mesh>
          <mesh position={[-4, 3, 0]}>
            <boxGeometry args={[4, 4, 4]} />
            <meshBasicMaterial color="#FF0000" wireframe />
          </mesh>
          <mesh position={[20, 4, 2]}>
            <sphereGeometry args={[4, 20, 20]} />
            <meshBasicMaterial color="#7777FF" wireframe />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default Chapter1;
