import React from 'react'
import {useParams} from 'react-router-dom'

type Props = {}

const Category = (props: Props) => {

const {id} = useParams();

  return (
    <div>Category - {id}</div>
  )
}

export default Category