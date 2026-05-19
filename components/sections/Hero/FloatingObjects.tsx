"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function GlassTorusKnot(props: { position?: [number, number, number]; scale?: number; speed?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.18 * (props.speed ?? 1);
    ref.current.rotation.y = t * 0.22 * (props.speed ?? 1);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.6}>
      <mesh ref={ref} position={props.position} scale={props.scale ?? 1}>
        <torusKnotGeometry args={[0.7, 0.22, 220, 32]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={1}
          thickness={0.6}
          roughness={0.05}
          chromaticAberration={0.35}
          ior={1.35}
          transmission={1}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#CABBFF"
        />
      </mesh>
    </Float>
  );
}

function GlassSphere(props: { position?: [number, number, number]; scale?: number }) {
  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh position={props.position} scale={props.scale ?? 1}>
        <icosahedronGeometry args={[0.55, 8]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.5}
          roughness={0.1}
          chromaticAberration={0.25}
          ior={1.4}
          transmission={1}
          distortion={0.1}
          color="#AB5CE9"
        />
      </mesh>
    </Float>
  );
}

function GlassCapsule(props: { position?: [number, number, number]; scale?: number }) {
  return (
    <Float speed={0.9} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh
        position={props.position}
        scale={props.scale ?? 1}
        rotation={[Math.PI * 0.18, Math.PI * 0.25, 0]}
      >
        <capsuleGeometry args={[0.28, 0.8, 8, 24]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.4}
          roughness={0.08}
          chromaticAberration={0.3}
          ior={1.5}
          transmission={1}
          distortion={0.18}
          color="#7A54FF"
        />
      </mesh>
    </Float>
  );
}

/**
 * 3D-композиция из иридесцентных стеклянных объектов.
 * Объекты медленно дрейфуют, материал — MeshTransmissionMaterial с хроматическими аберрациями.
 * Рендерится поверх hero, не блокирует pointer-events (canvas pointerEvents:none).
 */
export function FloatingObjects() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <directionalLight position={[-4, -2, 3]} intensity={0.6} color="#AB5CE9" />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <GlassTorusKnot position={[2.4, 0.6, 0]} scale={1.1} speed={0.7} />
          <GlassSphere position={[-2.6, -0.8, 0.5]} scale={1.2} />
          <GlassCapsule position={[2, -1.4, -0.5]} scale={1.4} />
          <GlassTorusKnot position={[-2.2, 1.4, -1]} scale={0.7} speed={1.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
