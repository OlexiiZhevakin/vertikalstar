import Image from "next/image"
import Link from "next/link"
import { ObjectPage } from "./data"
import { FC } from "react"


const Object: FC = () => {
  const data = ObjectPage

  return (
    <div>
      <ul>
        {data.map((img: any) => (
          <li key={img.id}>
            <Link href={`/object/${img.id}`}>
              <Image src={img.src} alt={img.title} width={300} height={300}/>
              <h1>{img.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Object