import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salary',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-05-06 20:20'),
        },
        {
          id: 2,
          title: 'Apartment',
          type: 'withdrawal',
          category: 'Home',
          amount: 1200,
          createdAt: new Date('2021-05-01 09:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.createdAt = new Date();

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
