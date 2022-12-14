import React from 'react'
import Avatar from '../Avatar'
import Tag, { ITag } from './Tag'
import moment from 'moment'
import { FaCalendarAlt } from 'react-icons/fa'
import { IAuthor } from '../../def/author'
interface IPostHeader {
  header: string
  tags: string[]
  avatar: Maybe<string>
  date: string
  minuteRead: string | number
  author: IAuthor
}
const Dot = (props = {}) => (
  <div className="ml-1 mr-1" {...props}>
    -
  </div>
)

const PostHeader = ({
  header,
  tags = [],
  avatar,
  date,
  minuteRead,
  author
}: IPostHeader) => {
  return (
    <div className="post-header mt-4">
      <div className="tag-wrapper mb-3">
        {tags.map((tag, index) => (
          <Tag value={tag} key={`tag_` + index} />
        ))}
      </div>
      <h1 className="w-50 text-center col-9 col-sm-10">{header}</h1>
      <div className="mt-4 d-flex align-center">
        <div className="d-flex align-center">
          <FaCalendarAlt
            className="mr-2"
            style={{ fill: '#171e22' }}
            size={17}
          />

          {moment(date).isValid() ? `${moment(date).format('DD-MM-YYYY')}` : ''}
        </div>
        <Dot />
        <p>{minuteRead} minutes read</p>
        <Dot />
        <a href="#comment">Bình luận</a>
      </div>
      <div className="mt-4">
        <Avatar src={avatar || ''} width={90} height={90} />
      </div>
      <div className="mt-4 d-flex align-center justify-center">
        {author?.name || 'Anomyous'}
      </div>
    </div>
  )
}

export default PostHeader
