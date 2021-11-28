import React from "react";
import Status from './Status';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import {updateStatus} from './../../reduxe/actions';

describe("Status component", () => {
  test('should be displayed with status', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    expect(screen.getByText('SUBSCRIBE TO BASIC')).toBeInTheDocument();
  });
  test('disable input in the first render', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    expect(screen.queryByRole('textbox')).toBeNull();
  });
  test('input should be display', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    fireEvent.doubleClick(screen.getByText('SUBSCRIBE TO BASIC'));
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
  });
  test('change input value', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    fireEvent.doubleClick(screen.getByText('SUBSCRIBE TO BASIC'));
    fireEvent.change(screen.queryByRole('textbox'), {
      target: { value: 'change text' },
    });
    expect(screen.queryByRole('textbox')).toHaveValue('change text');
  });
  test('input blur ', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" updateStatus = {updateStatus}/ > );
    fireEvent.doubleClick(screen.getByText('SUBSCRIBE TO BASIC'));
    fireEvent.change(screen.queryByRole('textbox'), {
      target: { value: 'change text' },
    });
    fireEvent.blur(screen.queryByRole('textbox'));
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.getByText('change text')).toBeInTheDocument();
  });
});