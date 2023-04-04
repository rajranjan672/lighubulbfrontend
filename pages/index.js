import { HStack } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'

import Card from "../components/Card";
import Landing from '../components/Landing';
import Ideas from '../components/Ideas';
import Link from 'next/link';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
    <ul>
      <li>
        <Link href="/"><a>Home</a></Link>
      </li>
    </ul>
    <Landing />
    <Profile />
    
    {/* <HStack>
    <Card />
    <Card />
    <Card />
    </HStack> */}
    </>
  )
}