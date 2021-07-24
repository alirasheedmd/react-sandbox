import React, { useState } from "react"
import axios from "axios"
import { Image } from "cloudinary-react"

const App = () => {
  const [image, setImage] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const uploadImage = async () => {
    const fd = new FormData()
    console.log(image[0])
    fd.append("file", image[0])
    fd.append("upload_preset", "q4ihwqxa")

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/magwatt/image/upload",
      fd
    )

    const { secure_url } = data
    setImageUrl(secure_url)
  }

  return (
    <div>
      <input
        type="file"
        id="input"
        onChange={(e) => {
          setImage(e.target.files)
        }}
      />
      <button onClick={() => uploadImage()}>Upload</button>
      <br />
      <Image style={{ width: 200 }} cloudName="magwatt" publicId={imageUrl} />
    </div>
  )
}

export default App
