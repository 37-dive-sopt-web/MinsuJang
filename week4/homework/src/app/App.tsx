import { AppRouterProvider } from '@app/providers/AppRouterProvider.tsx';
import { AppQueryProvider } from '@app/providers/AppQueryProvider.tsx';

function App() {
  return (
    <>
      <AppQueryProvider>
        <AppRouterProvider />
      </AppQueryProvider>
    </>
  );
}

export default App;
