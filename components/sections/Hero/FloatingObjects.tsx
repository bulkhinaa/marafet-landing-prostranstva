"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

/**
 * Лёгкая 3D-сцена для hero.
 * Оптимизации:
 *  - 2 объекта вместо 4
 *  - meshPhysicalMaterial вместо MeshTransmissionMaterial (≈10× быстрее GPU)
 *  - low-poly геометрия (≈40× меньше треугольников)
 *  - DPR clamp [1, 1.5] вместо [1, 2]
 *  - без Environment HDR (экономит загрузку ~1–3 МБ)
 *  - без backside / distortion / chromaticAberration
 *  - powerPreference: high-performance
 */

function GlowKnot() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={1.2}>
      <mesh ref={ref} position={[2.3, 0.4, 0]} scale={1.05}>
        <torusKnotGeometry args={[0.7, 0.22, 64, 12]} />
        <meshPhysicalMaterial
          color="#7A54FF"
          metalness={0.15}
          roughness={0.08}
          transmission={0.85}
          thickness={0.4}
          ior={1.4}
          attenuationColor="#AB5CE9"
          attenuationDistance={2.5}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
        />
      </mesh>
    </Float>
  );
}

function GlowSphere() {
  return (
    <Float speed={0.85} rotationIntensity={0.1} floatIntensity={1.0}>
      <mesh position={[-2.4, -0.7, -0.3]} scale={1.25}>
        <icosahedronGeometry args={[0.55, 2]} />
        <meshPhysicalMaterial
          color="#AB5CE9"
          metalness={0.2}
          roughness={0.12}
          transmission={0.7}
          thickness={0.35}
          ior={1.45}
          clearcoat={0.5}
        />
      </mesh>
    </Float>
  );
}

export function FloatingObjects() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        performance={{ min: 0.5 }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <directionalLight
          position={[-4, -2, 3]}
          intensity={0.4}
          color="#AB5CE9"
        />
        <Suspense fallback={null}>
          <GlowKnot />
          <GlowSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
