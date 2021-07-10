import React, { useState } from 'react'
import {RoconRoot} from "rocon/react";
import {Routes} from "~/components/routes/Routes";

function App() {
  return (
    <div>
      <RoconRoot>
        <Routes/>
      </RoconRoot>
    </div>
  )
}

export default App
