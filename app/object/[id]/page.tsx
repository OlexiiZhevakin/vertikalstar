'use client'

import { ObjectPage } from "../data"

type Props = {
  params: {
    id: string
    title: string
    body: string
  };
};

const ObjectId = ({params: {id}}: Props) => {

  const objects =  ObjectPage
  const object = objects.find(obj => obj.id === id)


  return (
    <div>
      {object ? (
        <>
          <h1>{object.title}</h1>
          <p>{object.body}</p>
        </>
      ) : (
        <div>Объект не найден</div>
      )}
    </div>
  )
}

export default ObjectId