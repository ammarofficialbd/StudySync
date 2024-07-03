import PropTypes from 'prop-types'
import { ScaleLoader } from 'react-spinners'

const Loading = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center `}
    >
      <ScaleLoader size={100} color='#5143d9' />
    </div>
  )
}

Loading.propTypes = {
  smallHeight: PropTypes.bool,
}

export default Loading