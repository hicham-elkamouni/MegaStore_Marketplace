import type { NextPage } from 'next'

interface Props {
    title: string;
  }

const ButtonStandart: NextPage<Props> = (props) => {
  return (
    <button type="button">
        {props.title}
    </button>
  )
}

export default ButtonStandart
