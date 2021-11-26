import React from "react";
import Status from './Status';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';

describe("Status component", () => {
  test('should be displayed with status', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    expect(screen.getByText('SUBSCRIBE TO BASIC')).toBeInTheDocument();
  });
  test('disable input in the first render', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    expect(screen.queryByRole('textbox')).toBeNull();
  });
  test('activate input', () => {
    render( < Status status = "SUBSCRIBE TO BASIC" / > );
    fireEvent.doubleClick(screen.getByText('SUBSCRIBE TO BASIC'));
    expect(screen.queryByRole('textbox')).toBeInTheDocument();

  });
});