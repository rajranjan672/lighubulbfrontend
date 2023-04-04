import React from 'react';
import { Flex, Button, Text, useColorMode, Box, Image, Heading, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, useColorModeValue } from "@chakra-ui/react";

const Ideas = () => {
  return (
    <>
    <div>
      Featured Ideas
    </div>
    {/* <input className='inputt' type="text"  placeholder='Search ideas' onChange={event => {setQuery(event.target.value)}} /> */}

    {/* <Flex> */}

    {/* {plans.slice(0, visible).filter(plan => {
      if(query=== '') {
        return plan;
        
      } else if (plan.title.toLowerCase().includes(query.toLowerCase())) {
        return plan;
      }}).map((plan) => {
            return( */}


      {/* {ideas.filter(idea => {
        if(query=== '') {
          return idea;
        } else if(idea.title.toLowerCase().includes(query.toLowerCase())) {
          return idea;
        }
      }).map((idea) => {
        return(
          <div className="cards" key={idea.id} >
          <span>{idea.title}</span>
          <p>{idea.description}</p>
          <div className="build-btn">Build</div>
          <div className="vouch-btn">Vouch</div>
    
        </div>
      )})}
      </Flex> */}
  </>

  )
}

export default Ideas
