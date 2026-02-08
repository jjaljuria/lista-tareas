import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, beforeEach, vi, expect } from 'vitest';
import CustomModal from './CustomModal';

describe('CustomModal', () => {
  const mockOnHide = vi.fn();

  beforeEach(() => {
    mockOnHide.mockClear();
  });

  test('should render the modal when show is true', () => {
    render(
      <CustomModal show={true} onHide={mockOnHide}>
        <div>Modal Content</div>
      </CustomModal>
    );
    expect(screen.getByText('Modal heading')).toBeTruthy();
    expect(screen.getByText('Modal Content')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Cerrar' })).toBeTruthy();
  });

  test('should not render the modal when show is false', () => {
    render(
      <CustomModal show={false} onHide={mockOnHide}>
        <div>Modal Content</div>
      </CustomModal>
    );
    expect(screen.queryByText('Modal heading')).not.toBeTruthy();
    expect(screen.queryByText('Modal Content')).not.toBeTruthy();
  });

  test('should call onHide when "Cerrar" button in footer is clicked', () => {
    render(
      <CustomModal show={true} onHide={mockOnHide}>
        <div>Modal Content</div>
      </CustomModal>
    );
    const closeButton = screen.getByRole('button', { name: 'Cerrar' });
    fireEvent.click(closeButton);
    expect(mockOnHide).toHaveBeenCalledTimes(1);
  });

  test('should call onHide when close button (x) in header is clicked', () => {
    render(
      <CustomModal show={true} onHide={mockOnHide}>
        <div>Modal Content</div>
      </CustomModal>
    );
    const closeButtonHeader = screen.getByLabelText('Close');
    fireEvent.click(closeButtonHeader);
    expect(mockOnHide).toHaveBeenCalledTimes(1);
  });

  test('should render children correctly', () => {
    render(
      <CustomModal show={true} onHide={mockOnHide}>
        <p>This is a test paragraph</p>
        <span>Another element</span>
      </CustomModal>
    );
    expect(screen.getByText('This is a test paragraph')).toBeTruthy();
    expect(screen.getByText('Another element')).toBeTruthy();
  });
});