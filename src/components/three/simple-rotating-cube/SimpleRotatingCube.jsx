import { Canvas } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import './styles.css'

export default function SimpleRotatingCube() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    
      <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color="#5f0000" />
        <Edges color="red" linewidth={2} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}