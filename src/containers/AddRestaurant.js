import { connect } from 'react-redux'
import AddRestaurant from '../components/AddRestaurant'
import { addRestaurant } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
      restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurant)