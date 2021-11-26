
import { connect } from 'react-redux'
import Dialogs from './Diologs';
import {withAuthRedirect} from './../../HOC/withAuthRedirect';
import { compose } from 'redux';
import {
    getDataUsersSelector,
    getDataMessagesSelector
} from './../../reduxe/selector';


const mapStateToProps = (state) => {

    return {
        dataMessages: getDataUsersSelector(state),
        dataUsers:getDataMessagesSelector(state),
        // isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {} ),
    withAuthRedirect   
)(Dialogs)
