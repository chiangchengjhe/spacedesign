import { Edges, OrbitControls} from "@react-three/drei";
import { Camera, Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


const objloader= new OBJLoader();
const mtlloader=new MTLLoader();
const model=useRef(null);

  function ObjTable(){
    const threeObj = useThree();
    // obj string below represents a cube
    useEffect(()=>{
        async function loadModel() {
            //@ts-ignore
            const data= await window.model.getModels();
            try {
            const obj = objloader.parse(data);
            model.current=obj;
            // threeObj.scene.add(obj);
            console.log(obj);
          } catch (error) {
            console.log(error);
          }
          }
          loadModel();
    },[]);

    return(<>
    <mesh>
        <bufferGeometry ref={model}/>
    </mesh>
    </>);
  }

export default function Threecanvas(){
    return (
        <Canvas>

    <ambientLight  />

        <directionalLight  position={[0, 0, 1000]} />
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
            <Edges/>
        </mesh>
        <ObjTable/>
        </Canvas>

    )

}