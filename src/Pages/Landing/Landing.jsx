import './Landing.css';
import React, { useEffect, useRef, useMemo, useState } from 'react'
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import regeneratorRuntime from 'regenerator-runtime'
import Button from '@material-ui/core/Button';
import { motion } from "framer-motion"

import * as THREE from 'three'

import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { WaterPass } from './Waterpass'
import { Effects } from '@react-three/drei/core/Effects'

extend({ EffectComposer, ShaderPass, RenderPass, WaterPass, AfterimagePass, UnrealBloomPass })

function Swarm({ count }) {
    const mesh = useRef()
    const light = useRef()
    const { viewport, mouse } = useThree()
  
    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
      const temp = []
      for (let i = 0; i < count; i++) {
        const t = Math.random() * .1
        const factor = 20 + Math.random() * 100
        const speed = 0.01 + Math.random() / 200
        const xFactor = -50 + Math.random() * 100
        const yFactor = -50 + Math.random() * 100
        const zFactor = -50 + Math.random() * 100
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
      }
      return temp
    }, [count])
    // The innards of this hook will run every frame
    useFrame((state) => {
      // Makes the light follow the mouse
      light.current.position.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)
      // Run through the randomized data to calculate some movement
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle
        // There is no sense or reason to any of this, just messing around with trigonometric functions
        t = particle.t += speed / 2
        const a = Math.cos(t) + Math.sin(t * 1) / 10
        const b = Math.sin(t) + Math.cos(t * 2) / 10
        const s = Math.cos(t)
        particle.mx += mouse.x * viewport.width * particle.mx * 0.01
        particle.my += mouse.y * viewport.height * particle.my * 0.01
        // Update the dummy object
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
        dummy.scale.set(s, s, s)
        dummy.rotation.set(s * 5, s * 5, s * 5)
        dummy.updateMatrix()
        // And apply the matrix to the instanced item
        mesh.current.setMatrixAt(i, dummy.matrix)
      })
      mesh.current.instanceMatrix.needsUpdate = true
    })
    return (
      <>
        <pointLight ref={light} distance={600} intensity={7.0} color="orange" />
        <instancedMesh ref={mesh} args={[null, null, count]}>
          <dodecahedronBufferGeometry args={[1, 1]} />
          <meshStandardMaterial color="black" />
        </instancedMesh>
      </>
    )
  }

  function Dolly() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {
        //number = distance of camera from center on z axis
      camera.position.z = 100 + Math.sin(clock.getElapsedTime()) * 10
    })
    return null
  }


const Landing = () => {
	const { userAddressHandler } = useContext(StateContext);
    const [web3Auth, setWeb3Auth] = useState(false)
    let accounts;
    
    const connectWallet = async () => { 
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        userAddressHandler(accounts[0])
        return setWeb3Auth(!web3Auth);
    }
    
    let render = [
    <div className='render'>
    <Canvas camera={{ fov: 80, position: [0, 0, 70] }}>
      <pointLight intensity={1} color="#4f6fff" />
      <spotLight intensity={.3} position={[70, 70, 70]} penumbra={1} color="white" />
      <spotLight intensity={.3} position={[70, 70, 70]} penumbra={1} color="white" />
      <Swarm count={500} />
      <Effects>
        {/* <waterPass attachArray="passes" factor={2} /> */}
        <unrealBloomPass attachArray="passes" args={[undefined, 5, 1, 0]} />
      </Effects>
      <Dolly />
    </Canvas>
    </div>]

    if (window.ethereum.isConnected()) return (
      <div className="bounds">
      <div className="text-box">
          <div className="heading">The future of Nfts</div>
              <Link to='/marketplace'>
                  <button className='button-landing'>explore</button>
              </Link>
      </div>
      {render}
  </div>  
    )
    else return (
            <div className="bounds">

            <div className="text-box">
                    <div className="heading">The future of Nfts</div>
                        <Link to='/marketplace'>
                            <button className='button-landing'>explore</button>
                        </Link>
                    <button className='button-landing-mm' onClick={connectWallet}>connect wallet</button>
                </div>
          </div> 
    )
}

export default Landing