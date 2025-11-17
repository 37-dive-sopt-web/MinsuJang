import { AppRouterProvider } from '@app/providers/AppRouterProvider.tsx';
import { AppQueryProvider } from '@app/providers/AppQueryProvider.tsx';
import { ThemeProvider } from '@app/providers/ThemeProvider.tsx';
import { OverlayProvider } from 'overlay-kit';

function App() {
  return (
    <ThemeProvider>
      <OverlayProvider>
        <AppQueryProvider>
          <AppRouterProvider />
        </AppQueryProvider>
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default App;
