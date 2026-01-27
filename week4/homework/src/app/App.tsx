import { AppRouterProvider } from '@app/providers/AppRouterProvider.tsx';
import { AppQueryProvider } from '@app/providers/AppQueryProvider.tsx';
import { ThemeProvider } from '@app/providers/ThemeProvider.tsx';
import { OverlayProvider } from 'overlay-kit';

function App() {
  return (
    <ThemeProvider>
      <AppQueryProvider>
        <OverlayProvider>
          <AppRouterProvider />
        </OverlayProvider>
      </AppQueryProvider>
    </ThemeProvider>
  );
}

export default App;
