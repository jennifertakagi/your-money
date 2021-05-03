import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
