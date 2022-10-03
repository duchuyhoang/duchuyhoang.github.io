import React from 'react'

// interface IParagraph {
//   content: any
// }

const Paragraph = ({ children, ...rest }) => {
  console.log(rest)
  return <p className="paragraph">{children}</p>
}

export default Paragraph