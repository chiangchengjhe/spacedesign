import { Edges, OrbitControls, TrackballControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";


export default function Threecanvas(){
    return (
        <Canvas>

    <ambientLight  />

        <directionalLight  position={[0, 0, 5]} />
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
            <Edges/>
        </mesh>

        </Canvas>

    )

}