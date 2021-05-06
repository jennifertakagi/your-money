import { FormEvent, useCallback, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('deposit');
  const [value, setValue] = useState(0);

  const toggleButtonType = useCallback(() => {
    const newType = type === 'deposit' ? 'withdrawal' : 'deposit';
    setType(newType);
  }, [type]);

  function handleCreateNewTransactionModal(event: FormEvent) {
    event.preventDefault();

    const data = { category, title, type, value };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransactionModal}>
        <h2>New Transaction</h2>

        <input
          onChange={event => setTitle(event.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          onChange={event => setValue(Number(event.target.value))}
          placeholder="Value"
          type="number"
          value={value}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={toggleButtonType}
            isActive={type === 'deposit'}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={toggleButtonType}
            isActive={type === 'withdrawal'}
            activeColor="#E52E4D"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          onChange={event => setCategory(event.target.value)}
          placeholder="Category"
          type="text"
          value={category}
        />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
