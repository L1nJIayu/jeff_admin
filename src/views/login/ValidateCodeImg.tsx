
import { Image } from 'antd'
import { useState } from 'react'
import { getValidateCodeImgURI } from '../../api/modules/admin'

const ValidateCodeImg = () => {
  const [ src, setSrc ] = useState(getValidateCodeImgURI())

  const updateCode = () => {
    const t = new Date().getTime()
    setSrc(getValidateCodeImgURI())
  }

  return (
    <Image
      className="cursor-pointer"
      onClick={updateCode}
      preview={false}
      src={src}
    />
  )
}

export default ValidateCodeImg