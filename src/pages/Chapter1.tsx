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
          shadows
          camera={{ fov: 75, position: [-30, 40, 30] }}
          style={{ backgroundColor: '#000000' }}
        >
          <mesh
            receiveShadow
            castShadow
            position={[15, 0, 0]}
            rotation={[-0.5 * Math.PI, 0, 0]}
          >
            <planeGeometry args={[60, 20]} />
            <meshLambertMaterial color="#AAAAAA" />
          </mesh>
          <mesh castShadow position={[-4, 3, 0]}>
            <boxGeometry args={[4, 4, 4]} />
            <meshLambertMaterial color="#FF0000" />
          </mesh>
          <mesh castShadow position={[20, 4, 2]}>
            <sphereGeometry args={[4, 20, 20]} />
            <meshLambertMaterial color="#7777FF" />
          </mesh>
          <spotLight
            color="#ffffff"
            position={[-40, 40, -15]}
            castShadow
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
            shadow-camera-far={130}
            shadow-camera-near={40}
          ></spotLight>
        </Canvas>
      </div>
    </div>
  );
};

export default Chapter1;
