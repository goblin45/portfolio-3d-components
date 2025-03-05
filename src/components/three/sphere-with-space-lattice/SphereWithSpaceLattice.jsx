import { Canvas } from "@react-three/fiber"

import './styles.css'
import { Line, OrbitControls } from "@react-three/drei"

export default function SphereWithSpaceLattice () {
  const size = 10;  // Grid size
  const divisions = 10; // Number of grid lines

  // Function to generate grid lines in all directions
  const generateLines = () => {
      let lines = [];

      for (let i = -size / 2; i <= size / 2; i += size / divisions) {
          for (let j = -size / 2; j <= size / 2; j += size / divisions) {
              // Lines parallel to X-axis
              lines.push([[i, j, -size / 2], [i, j, size / 2]]);
              // Lines parallel to Y-axis
              lines.push([[-size / 2, i, j], [size / 2, i, j]]);
              // Lines parallel to Z-axis
              lines.push([[i, -size / 2, j], [i, size / 2, j]]);
          }
      }
      return lines;
  };

  const lines = generateLines();

  return (
    <Canvas camera={{ position: [7, 7, 7], fov: 75 }}>
        <ambientLight intensity={Math.PI / 2} /> 
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ff0000" />
        </mesh>

        {
          lines.map((line, index) => (
            <Line key={index} points={line} color="white" linewidth={0.5} />
          ))
        }
        
        <OrbitControls />
    </Canvas>
  )
}