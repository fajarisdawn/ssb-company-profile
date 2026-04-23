"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function RectifierModule() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const isDark = theme === "dark";
    return {
      green: isDark ? "#00ff88" : "#059669",
      blue: isDark ? "#00d4ff" : "#0284c7",
      body: isDark ? "#151a3a" : "#f8fafc",
      panel: isDark ? "#111638" : "#ffffff",
      vent: isDark ? "#0a0e27" : "#e2e8f0",
      fin: isDark ? "#1a1f3a" : "#cbd5e1",
    };
  }, [theme]);

  // Pulsing emission
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
    if (glowRef.current) {
      const material = glowRef.current.material as THREE.MeshStandardMaterial;
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 0.7;
      material.emissiveIntensity = pulse;
    }
  });

  const edgeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(colors.green),
        emissive: new THREE.Color(colors.green),
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2,
      }),
    [colors.green]
  );

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(colors.body),
        metalness: 0.9,
        roughness: 0.3,
      }),
    [colors.body]
  );

  const connectorMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(colors.blue),
        emissive: new THREE.Color(colors.blue),
        emissiveIntensity: 0.6,
        metalness: 0.7,
        roughness: 0.3,
      }),
    [colors.blue]
  );

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Main rectifier body */}
        <mesh material={bodyMaterial}>
          <boxGeometry args={[2.4, 3.2, 0.6]} />
        </mesh>

        {/* Front panel with glow */}
        <mesh ref={glowRef} position={[0, 0, 0.31]}>
          <boxGeometry args={[2.2, 3, 0.02]} />
          <meshStandardMaterial
            color={colors.panel}
            emissive={colors.green}
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Edge trim - top */}
        <mesh position={[0, 1.6, 0]} material={edgeMaterial}>
          <boxGeometry args={[2.5, 0.05, 0.65]} />
        </mesh>

        {/* Edge trim - bottom */}
        <mesh position={[0, -1.6, 0]} material={edgeMaterial}>
          <boxGeometry args={[2.5, 0.05, 0.65]} />
        </mesh>

        {/* Edge trim - left */}
        <mesh position={[-1.2, 0, 0]} material={edgeMaterial}>
          <boxGeometry args={[0.05, 3.25, 0.65]} />
        </mesh>

        {/* Edge trim - right */}
        <mesh position={[1.2, 0, 0]} material={edgeMaterial}>
          <boxGeometry args={[0.05, 3.25, 0.65]} />
        </mesh>

        {/* Status LEDs */}
        {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
          <mesh key={i} position={[x, 1.2, 0.32]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={i < 3 ? colors.green : colors.blue}
              emissive={i < 3 ? colors.green : colors.blue}
              emissiveIntensity={1.2}
            />
          </mesh>
        ))}

        {/* Display screen */}
        <mesh position={[0, 0.4, 0.32]}>
          <planeGeometry args={[1.6, 0.6]} />
          <meshStandardMaterial
            color={colors.vent}
            emissive={colors.green}
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Ventilation slots */}
        {[-0.8, -0.4, 0, 0.4, 0.8].map((y, i) => (
          <mesh key={`vent-${i}`} position={[0, y - 0.6, 0.32]}>
            <boxGeometry args={[1.4, 0.04, 0.01]} />
            <meshStandardMaterial color={colors.vent} />
          </mesh>
        ))}

        {/* Connectors on bottom */}
        {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
          <mesh key={`conn-${i}`} position={[x, -1.7, 0]} material={connectorMaterial}>
            <cylinderGeometry args={[0.06, 0.06, 0.3, 8]} />
          </mesh>
        ))}

        {/* Heatsink fins on back */}
        {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
          <mesh key={`fin-${i}`} position={[x, 0, -0.35]}>
            <boxGeometry args={[0.08, 2.8, 0.15]} />
            <meshStandardMaterial color={colors.fin} metalness={0.95} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function RectifierScene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={isDark ? 0.3 : 0.6} />
        <pointLight position={[5, 5, 5]} intensity={isDark ? 1 : 1.5} color={isDark ? "#00ff88" : "#059669"} />
        <pointLight position={[-5, -3, 3]} intensity={isDark ? 0.5 : 0.8} color={isDark ? "#00d4ff" : "#0284c7"} />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#ffffff" />
        <RectifierModule />
      </Canvas>
    </div>
  );
}
