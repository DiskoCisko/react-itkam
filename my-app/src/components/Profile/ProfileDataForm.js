import React from 'react';
import { reduxForm } from 'redux-form';
import {FormContainerProfile} from './../common/FormControll/FormController';
import { connect } from 'react-redux';
import {getProfileSelector, getIdSelector} from './../../reduxe/selector';
import {saveProfile} from './../../reduxe/actions';

export const WithFormReduxe =  reduxForm({
    form: 'loginForm',
  })(FormContainerProfile);

const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        userId: getIdSelector(state)
    }
}



const ProfileDataForm = ({saveProfile, userId, deactiveEditeMode, profile}) => {
    return <> 
        <h1>
            Form
            <WithFormReduxe initialValues={profile} userId = {userId} saveProfile={saveProfile} deactiveEditeMode={deactiveEditeMode} profile={profile}/>
        </h1>
    </>
}

export default connect(mapStateToProps, {saveProfile})(ProfileDataForm)