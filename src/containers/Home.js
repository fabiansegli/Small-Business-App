import { connect } from 'react-redux';
import Home from '../components/Home';
import { addRestaurant, removeRestaurant } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        restaurants: state.restaurants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRestaurant: () => dispatch(addRestaurant()),
        removeRestaurant: (idx) => dispatch(removeRestaurant(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)