
import { connect } from 'react-redux'
import Dialogs from './Diologs';



const mapStateToProps = (state) => {

    return {
        dataMessages: state.dialogs.dataMessages,
        dataUsers: state.dialogs.dataUsers,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {} )(Dialogs);