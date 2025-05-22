'use client';
import React, { useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ThreedProps {
  fabricUrl: string | null;
  selections: {
    bodyType: string;
    sleeveType: string;
    collarType: string;
  };
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Model = ({
  modelPath,
  fabricUrl,
  onCenterCalculated,
}: {
  modelPath: string;
  fabricUrl: string | null;
  onCenterCalculated: (center: THREE.Vector3) => void;
}) => {
  const gltf = useGLTF(modelPath);
  const placeholderUrl = '/shirtfy.png'; // Make sure this exists
  const safeUrl = fabricUrl || placeholderUrl;
  const texture = useLoader(THREE.TextureLoader, safeUrl);

  useEffect(() => {
    if (!gltf?.scene) return;

    const scene = gltf.scene;

    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);
    const scaleFactor = 1.5 / maxAxis;

    scene.scale.setScalar(scaleFactor);
    scene.position.set(0, 0, 0);
    const adjustedCenter = center.clone().multiplyScalar(scaleFactor);
    scene.position.sub(adjustedCenter);

    const orbitTarget = new THREE.Vector3(0, 1, 0);
    const finalTarget = scene.position.clone().add(orbitTarget);
    onCenterCalculated(finalTarget);

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;

        if (!mesh.name.toLowerCase().includes('shirt')) {
          material.color = new THREE.Color(0xfad7b3);
        }

        if (mesh.name.toLowerCase().includes('shirt') && fabricUrl) {
          material.map = texture;
          material.needsUpdate = true;
        }
      }
    });
  }, [gltf, texture, fabricUrl, onCenterCalculated]);

  return <primitive object={gltf.scene} />;
};

const Threed = ({ fabricUrl, selections }: ThreedProps) => {
  const [modelPath, setModelPath] = useState<string | null>(null);
  const [orbitTarget, setOrbitTarget] = useState<THREE.Vector3>(new THREE.Vector3(0, 1, 0));

  useEffect(() => {
    const { bodyType, sleeveType, collarType } = selections;
    if (bodyType && sleeveType && collarType) {
      const path = `/models/${bodyType}_${capitalize(sleeveType)}_Sleeve_${capitalize(collarType)}_Collar.glb`;
      setModelPath(path);
    }
  }, [selections]);

  return (
    <Canvas camera={{ position: [0, 1.5, 2.3], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 3, 2]} intensity={0.5} />
      <OrbitControls
        target={orbitTarget.toArray()}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        minDistance={0.5}
        maxDistance={6}
      />
      {modelPath && (
        <Model
          modelPath={modelPath}
          fabricUrl={fabricUrl}
          onCenterCalculated={setOrbitTarget}
        />
      )}
    </Canvas>
  );
};

export default Threed;
