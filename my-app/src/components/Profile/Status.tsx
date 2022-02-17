import React, { useState, useEffect, ChangeEvent } from 'react';

type StatusPropsType = {
  userId: number;
  id: number;
  status: string;
  updateStatus: (status: string) => (dispatch: any) => Promise<never>;
};

const Status: React.FC<StatusPropsType> = (props) => {
  const [isEditMode, setIsEditeMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const letEditStatus = () => {
    debugger;
    if (props.id === props.id) {
      setIsEditeMode(true);
    }
  };
  const closeEditStatus = () => {
    setIsEditeMode(false);
    props.updateStatus(status);
  };
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
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

export default Status;
