import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';
import { groupEnd } from 'console';
import { SubmitComponent } from './submit.component';
import {
  provideMock,
  Mock,
  createMock,
} from '@testing-library/angular/jest-utils';
import EventEmitter from '@angular/core';
import { User } from '../user.service';
import userEvent from '@testing-library/user-event';

describe('SubmitComponent', () => {
  it('should create', async () => {
    const component = await render(SubmitComponent, {
      imports: [ReactiveFormsModule],
    });

    expect(component).toBeTruthy();
  });

  it('should create', async () => {
    const addUser = {
      emit: jest.fn(),
    };

    await render(SubmitComponent, {
      imports: [ReactiveFormsModule],
      componentProperties: {
        addUser: addUser as any,
      },
    });

    const nameInput = screen.getByLabelText(/Name/i);
    const groesseInput = screen.getByLabelText(/Größe/i);
    const submitButton = screen.getByText('Create user');

    userEvent.type(nameInput, 'test');

    userEvent.type(groesseInput, '182');

    // expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(addUser.emit).toHaveBeenLastCalledWith(
      expect.objectContaining({ name: 'test', height: 182 })
    );
  });
});
