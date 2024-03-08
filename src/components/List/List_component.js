import React from 'react'

import data_false from '../false_data.json'
import { ListView } from '../ListView'


export const List_component = () => {
  const {members} = data_false

  return (
    <>
    <ListView 
    cualquiercosa={members}
    />
    </>
  )
}
