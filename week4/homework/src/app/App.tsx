import { AppRouterProvider } from '@app/providers/AppRouterProvider.tsx';
import { AppQueryProvider } from '@app/providers/AppQueryProvider.tsx';
import { ThemeProvider } from '@app/providers/ThemeProvider.tsx';

function App() {
  return (
    <ThemeProvider>
      <AppQueryProvider>
        <AppRouterProvider />
      </AppQueryProvider>
    </ThemeProvider>
  );
}

export default App;
