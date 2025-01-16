import CodeBlock from "@/components/CodeBlock";

export default function MUIThemingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">MUI Tema & Styling</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan tilpasse MUIs udseende gennem temaer, farver og
          styling muligheder.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Tema Setup</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Start med at oprette en tema konfiguration:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  spacing: 8, // Basis spacing enhed i pixels
  shape: {
    borderRadius: 4,
  },
});

export default theme;`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Dark Mode</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Implementer dark mode med MUIs tema system:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// theme.ts
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';

export function ThemeWrapper({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          ...(prefersDarkMode ? {
            // Dark mode farver
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
            text: {
              primary: '#ffffff',
              secondary: 'rgba(255, 255, 255, 0.7)',
            },
          } : {
            // Light mode farver
            background: {
              default: '#ffffff',
              paper: '#f5f5f5',
            },
            text: {
              primary: 'rgba(0, 0, 0, 0.87)',
              secondary: 'rgba(0, 0, 0, 0.6)',
            },
          }),
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Styling Metoder</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            MUI tilbyder flere måder at style komponenter på:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// 1. sx prop - Hurtig inline styling
<Box
  sx={{
    p: 2,
    bgcolor: 'background.paper',
    borderRadius: 1,
    '&:hover': {
      bgcolor: 'primary.light',
    },
  }}
>
  Indhold
</Box>

// 2. styled API - Genbrugelige styled komponenter
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

// 3. makeStyles (legacy) - Stil flere komponenter sammen
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}));`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Responsive Design</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Brug MUIs breakpoint system til responsive design:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Responsive styling med sx prop
<Box
  sx={{
    width: {
      xs: '100%',     // 0px
      sm: '50%',      // 600px
      md: '33.33%',   // 900px
      lg: '25%',      // 1200px
      xl: '20%',      // 1536px
    },
    p: {
      xs: 1,
      sm: 2,
      md: 3,
    },
  }}
>
  Responsivt indhold
</Box>

// Responsive Grid layout
<Grid container spacing={{ xs: 2, md: 3 }}>
  <Grid item xs={12} sm={6} md={4}>
    <Card>Indhold</Card>
  </Grid>
</Grid>

// Skjul/vis elementer baseret på breakpoints
<Hidden smDown>
  <div>Vises kun på medium og større skærme</div>
</Hidden>`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">Tema Best Practices</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">Centraliseret Tema</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hold alle tema indstillinger i én central fil for nemmere
                vedligeholdelse.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">Brug Theme Helpers</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Udnyt theme.spacing() og theme.palette for konsistent styling på
                tværs af appen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">
                Komponent Varianter
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Definer komponet varianter i temaet i stedet for inline styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
