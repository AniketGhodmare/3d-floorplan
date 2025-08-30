import { Suspense, useRef, useState } from "react";
import { roomTitle } from "../constants";
import FloorplanModel from "../jsx_model/FloorplanModel";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, Loader, OrbitControls } from "@react-three/drei";

const FloorPlan = () => {
    const controlsRef = useRef();
    const [camPos, setCamPos] = useState({ "x": 0, "y": 9, "z": 0 })
    const [target, setTarget] = useState({ "x": 0, "y": 0, "z": 0 })
    const [lerping, setLerping] = useState(false)
    return (
        <div className="h-screen w-screen bg-[#030d30] relative">
            <div className="h-full">
                <Canvas shadows camera={{ position: [0, 9, 0] }}
                    onPointerDown={() => setLerping(false)}
                    onWheel={() => setLerping(false)}
                >
                    <Suspense fallback={<Loader />}>
                        <ambientLight intensity={2} />
                        <Environment preset="city"
                        // background  ground={{ height : 1, radius: 5, scale: 100 }} 
                        />
                        <FloorplanModel />

                        <Annotations onClick={(room) => { setCamPos(room.camPos); setTarget(room.target); setLerping(true); }} />
                        <Animate controls={controlsRef} lerping={lerping} to={camPos} target={target} />

                        <OrbitControls ref={controlsRef}
                            // autoRotate={true}
                            target={[target.x, target.y, target.z]}
                            minPolarAngle={0}
                            maxPolarAngle={1.4}
                            minDistance={0}
                            maxDistance={10}
                        />
                    </Suspense>
                    {/* <axesHelper args={[50]} /> */}
                    {/* <gridHelper /> */}
                </Canvas>
            </div>

            <div className=" absolute top-0 right-0 m-3">
                <div className="flex flex-col gap-1">
                    {roomTitle.map((room) =>
                        <div key={room.title} className='p-1 bg-black bg-opacity-25 cursor-pointer text-white capitalize text-xs select-none'
                            onClick={() => { setCamPos(room.camPos); setTarget(room.target); setLerping(true); }}
                        > {room.title}
                        </div>
                    )}
                    <div className='p-1 bg-black bg-opacity-25 cursor-pointer text-white capitalize text-xs select-none'
                        onClick={() => { setCamPos({ "x": 0, "y": 9, "z": 0 }); setTarget({ "x": 0, "y": 0, "z": 0 }); setLerping(true); }}
                    >floor plan</div>
                </div>
            </div>
        </div>
    )
}

export default FloorPlan

let Annotations = ({ onClick }) => {
    return (
        <>
            {roomTitle.map((room, i) => {
                return (
                    <Html key={`room-${i}`} position={[room.target.x, 3, room.target.z]}  >
                        <div id={'desc_' + 1}
                            className="annotationDescription p-1 text-xs  border-2 border-white text-center rounded-md text-white font-semibold capitalize bg-black bg-opacity-50 cursor-pointer"
                            onClick={() => { onClick(room) }}
                            dangerouslySetInnerHTML={{ __html: room.title }}
                        />
                    </Html>
                )
            })}
        </>
    )
}

function Animate({ controls, lerping, to, target }) {
    useFrame(({ camera }, delta) => {
        if (lerping) {
            camera.position.lerp(to, delta * 2)
            controls.current.target.lerp(target, delta * 2)
            // controls.current.autoRotate = true
        }
    })
}
