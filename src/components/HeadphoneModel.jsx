import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const FloatingModel = () => {
    const modelRef = useRef();
    const floatSpeed = 0.001;
    const amplitude = 0.2; 

    const gltf = useLoader(GLTFLoader, '/try3.glb');

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.position.y = amplitude * Math.sin(Date.now() * floatSpeed);
        }
    });

    return (
        <>
            <primitive ref={modelRef} object={gltf.scene} position={[0,-1, 0]} scale={[1, 1, 1]} />
            {/* Add label above the model */}
            <Html center position={[0, -0.7, 0]}>
                <div style={{ color: 'wheat', fontSize: '1.5em' }}>Chrome Buttons</div>
            </Html>
            <Html center position={[-1.5, 0, 0]}>
                <div style={{ color: 'wheat', fontSize: '1.5em' }}>Soft Fabric</div>
            </Html>
            <Html center position={[1.5, 0, 0]}>
                <div style={{ color: 'wheat', fontSize: '1.5em' }}>Excellent Sound</div>
            </Html>
            <Html center position={[1.5, 1, 0]}>
                <div style={{ color: 'wheat', fontSize: '1.5em' }}>Longest Battery</div>
            </Html>
            <Html center position={[-1.5, 1.5,0]}>
                <div style={{ color: 'wheat', fontSize: '1.5em' }}>AI enhancing</div>
            </Html>
        </>
    );
};

const HeadphoneModel = () => {
    return (
        <div className="mt-[50px]">
            <Canvas camera={{ position: [1, 1, 2.5], fov: 70 }} style={{ height: '70vh' }}>
                <ambientLight intensity={1} /> {/* Adjusted intensity for better lighting */}
                <pointLight position={[5, 4, 5]} />
                <FloatingModel />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default HeadphoneModel;



