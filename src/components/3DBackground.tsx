'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Sphere, MeshDistortMaterial, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function Bubble({ position, size, speed }: { position: [number, number, number]; size: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y += speed * 0.01;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Reset position when bubble goes too high
      if (meshRef.current.position.y > 10) {
        meshRef.current.position.y = -10;
      }
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[size, 32, 32]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#a78bfa" : "#7c3aed"}
        speed={hovered ? 4 : 2}
        distort={hovered ? 0.4 : 0.2}
        radius={1}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

function FloatingOrb({ position, size }: { position: [number, number, number]; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y += Math.sin(clock.elapsedTime * 0.5) * 0.002;
    }
  });

  return (
    <Torus
      ref={meshRef}
      args={[size, size * 0.3, 16, 32]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#ffc414" : "#1ca0fb"}
        speed={hovered ? 6 : 3}
        distort={hovered ? 0.6 : 0.3}
        radius={1}
        transparent
        opacity={0.4}
      />
    </Torus>
  );
}

function FloatingCube({ position, size }: { position: [number, number, number]; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
      meshRef.current.position.x += Math.sin(clock.elapsedTime * 0.3) * 0.001;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[size, size, size]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#00ccb1" : "#7b61ff"}
        speed={hovered ? 5 : 2}
        distort={hovered ? 0.5 : 0.2}
        radius={1}
        transparent
        opacity={0.3}
      />
    </Box>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  // Generate positions once
  const positions = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]} // ✅ FIX: use args instead of array + itemSize
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function EnergyBeams() {
  const beamsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (beamsRef.current) {
      beamsRef.current.rotation.y += 0.005;
      beamsRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group ref={beamsRef}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[0, 0, 0]} rotation={[0, 0, (i * Math.PI) / 4]}>
          <cylinderGeometry args={[0.01, 0.01, 15, 8]} />
          <meshBasicMaterial
            color="#7c3aed"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function WaveEffect() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshBasicMaterial
        color="#a78bfa"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

export default function ThreeDBackground() {
  const bubbles = [
    { position: [-5, -5, -5] as [number, number, number], size: 0.5, speed: 0.5 },
    { position: [5, -3, -3] as [number, number, number], size: 0.8, speed: 0.3 },
    { position: [-3, 2, -7] as [number, number, number], size: 0.6, speed: 0.7 },
    { position: [7, -7, -2] as [number, number, number], size: 1.2, speed: 0.2 },
    { position: [-8, 1, -4] as [number, number, number], size: 0.4, speed: 0.6 },
    { position: [4, 5, -6] as [number, number, number], size: 0.9, speed: 0.4 },
    { position: [-6, -2, -8] as [number, number, number], size: 0.7, speed: 0.8 },
    { position: [8, 3, -1] as [number, number, number], size: 1.0, speed: 0.3 },
    { position: [-2, -8, -3] as [number, number, number], size: 0.5, speed: 0.5 },
    { position: [6, -1, -9] as [number, number, number], size: 0.8, speed: 0.6 },
  ];

  const orbs = [
    { position: [-10, 5, -3] as [number, number, number], size: 1.5 },
    { position: [10, -5, -7] as [number, number, number], size: 1.2 },
    { position: [-8, -8, -1] as [number, number, number], size: 1.8 },
    { position: [8, 8, -5] as [number, number, number], size: 1.0 },
  ];

  const cubes = [
    { position: [-12, 2, -4] as [number, number, number], size: 0.8 },
    { position: [12, -2, -6] as [number, number, number], size: 1.2 },
    { position: [-10, -6, -2] as [number, number, number], size: 0.6 },
    { position: [10, 6, -8] as [number, number, number], size: 1.0 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a78bfa" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#7c3aed" />

        {/* Floating Bubbles */}
        {bubbles.map((bubble, index) => (
          <Bubble key={index} {...bubble} />
        ))}

        {/* Floating Orbs */}
        {orbs.map((orb, index) => (
          <FloatingOrb key={`orb-${index}`} {...orb} />
        ))}

        {/* Floating Cubes */}
        {cubes.map((cube, index) => (
          <FloatingCube key={`cube-${index}`} {...cube} />
        ))}

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Energy Beams */}
        <EnergyBeams />

        {/* Wave Effect */}
        <WaveEffect />
      </Canvas>
    </div>
  );
}
