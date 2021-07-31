
import { connect } from 'react-redux'
import Dialogs from './Diologs';
import {withAuthRedirect} from './../../HOC/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {

    return {
        dataMessages: state.dialogs.dataMessages,
        dataUsers: state.dialogs.dataUsers,
        // isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {} ),
    withAuthRedirect   
)(Dialogs)
