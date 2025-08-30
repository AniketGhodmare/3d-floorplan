import { MeshReflectorMaterial, useGLTF } from '@react-three/drei';

const FloorplanModel = (props) => {
    const { nodes, materials } = useGLTF("./models/new-floor.glb");
    return (
        <group {...props} dispose={null}>
            <mesh position={[1.96, 1.069, 1.79]} rotation={[3.13, 0, 0]}  >
                <planeGeometry args={[0.35, 0.35, 1]} />
                <MeshReflectorMaterial
                    // color={'white'}
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={1}
                    mixBlur={0.5}
                    mixStrength={0.5}
                />
            </mesh>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door.geometry}
                    material={materials.Material__2100478584}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Material__2100478581}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.Material__2100478583}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.Material__2100478585}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.Material__2100478585}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Material__2100478585}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.Material__2100478585}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.Material__2100478585}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.Material__2100478586}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.Material__2100478586}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.Material__2100478586}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.Material__2100478586}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material__2100478577}
                    position={[42.516, 41.507, 0.106]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wood2.geometry}
                    material={materials.Material__2100478585}
                    position={[42.516, 41.507, 0.106]}
                />
            </group>
        </group>
    );

}
useGLTF.preload("./models/new-floor.glb");
export default FloorplanModel