import React, { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import {RoconRoot} from "rocon/react";
import {Routes} from "~/components/routes/Routes";

function App() {
  return (
    <div>
      <HelmetProvider>
        <RoconRoot>
          <Routes/>
        </RoconRoot>
      </HelmetProvider>
    </div>
  )
}

export default App
