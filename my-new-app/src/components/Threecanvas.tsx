import { Edges, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";


export default function Threecanvas(){
    return (
        <Canvas>

    <OrbitControls>
    <ambientLight  />
        <directionalLight  position={[0, 0, 5]} />
        <mesh>
            <boxGeometry />
            <Edges/>
            <meshStandardMaterial />
        </mesh>
    </OrbitControls>

        </Canvas>
    )

}