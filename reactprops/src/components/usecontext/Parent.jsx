import React, { createContext } from 'react'
import Child from './Child'

export const NameContext = createContext();

function Parent() {
    return (
        <NameContext.Provider value='TanayUseContext'>
            <Child />
        </NameContext.Provider>
    )
}

export default Parent