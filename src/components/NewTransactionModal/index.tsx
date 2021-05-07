import { FormEvent, useCallback, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('deposit');

  const toggleButtonType = useCallback(() => {
    const newType = type === 'deposit' ? 'withdrawal' : 'deposit';
    setType(newType);
  }, [type]);

  const resetFormData = useCallback(() => {
    setAmount(0);
    setCategory('');
    setTitle('');
    setType('deposit');
  }, []);

  async function handleCreateNewTransactionModal(event: FormEvent) {
    event.preventDefault();

    try {
      await createTransaction({
        amount,
        category,
        title,
        type,
      });

      onRequestClose();
      resetFormData();
    } catch (err) {
      console.error(err); // TypeError: failed to fetch
    }
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
          onChange={event => setAmount(Number(event.target.value))}
          placeholder="Amount"
          type="number"
          value={amount}
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
