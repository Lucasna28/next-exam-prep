import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function MUIPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">Material-UI (MUI)</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Material-UI er et populært React komponentbibliotek baseret på Googles
          Material Design. Det tilbyder en omfattende samling af færdige
          komponenter og styling værktøjer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Installation</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Start med at installere de nødvendige MUI pakker i dit projekt:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`# Installer core pakken og icon biblioteket
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`}
              language="bash"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`// pages/_app.tsx eller app/layout.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme'; // Din tema konfiguration

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS og basis styling */}
      {children}
    </ThemeProvider>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Komponenter</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            MUI kommer med en bred vifte af færdige komponenter. Her er nogle af
            de mest brugte:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`import { 
  Button, 
  TextField, 
  Card,
  CardContent,
  Typography 
} from '@mui/material';

export default function DemoComponent() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Velkommen
        </Typography>
        
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        
        <Button variant="contained" color="primary">
          Send
        </Button>
      </CardContent>
    </Card>
  );
}`}
              language="tsx"
            />
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Populære Komponenter:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Button - Knapper med forskellige varianter</li>
              <li>TextField - Input felter med validering</li>
              <li>Select - Dropdown menuer</li>
              <li>Card - Kort layout container</li>
              <li>Dialog - Modal vinduer</li>
              <li>AppBar - Top navigation</li>
              <li>Drawer - Side menu</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Styling med MUI</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            MUI tilbyder flere måder at style komponenter på:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Styling med sx prop
<Box
  sx={{
    p: 2, // padding: theme.spacing(2)
    bgcolor: 'background.paper',
    borderRadius: 1,
    display: 'flex',
    gap: 2,
  }}
>
  <Button
    sx={{
      bgcolor: 'primary.main',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
    }}
  >
    Klik Her
  </Button>
</Box>

// Styling med styled API
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">MUI Best Practices</h3>
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
              <strong className="block text-xs mb-1">Konsistent Tema</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Definer et centralt tema og brug theme.spacing() og
                theme.palette for konsistent styling.
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
              <strong className="block text-xs mb-1">Bundle Size</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug tree-shaking ved at importere komponenter direkte fra deres
                moduler.
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
              <strong className="block text-xs mb-1">Responsivt Design</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug MUIs breakpoint system og Grid komponent for responsive
                layouts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/topics/styling-and-ui/mui/components"
          className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          <h3 className="text-base font-semibold mb-2">Komponenter →</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Udforsk MUIs omfattende komponentbibliotek og deres anvendelse.
          </p>
        </Link>

        <Link
          href="/topics/styling-and-ui/mui/theming"
          className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          <h3 className="text-base font-semibold mb-2">Tema & Styling →</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Lær om MUIs tema system og forskellige styling muligheder.
          </p>
        </Link>
      </div>
    </div>
  );
}
