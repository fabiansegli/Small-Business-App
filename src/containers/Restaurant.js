import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurant);