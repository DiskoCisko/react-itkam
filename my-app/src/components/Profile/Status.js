import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Status = (props) => {
  const [isEditMode, setIsEditeMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const letEditStatus = () => {
    if (props.id === props.userId) {
      setIsEditeMode(true);
    }
  };
  const closeEditStatus = () => {
    setIsEditeMode(false);
    props.updateStatus(status);
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  if (!isEditMode) {
    return <p onDoubleClick={letEditStatus}>{status}</p>;
  }
  return (
    <input
      onBlur={closeEditStatus}
      onChange={changeStatus}
      placeholder={status}
    />
  );
};
Status.defaultProps = {
  status: undefined,
  id: undefined,
  userId: undefined,
};
Status.propTypes = {
  status: PropTypes.string,
  id: PropTypes.number,
  userId: PropTypes.number,
  updateStatus: PropTypes.func.isRequired,
};

export default Status;
