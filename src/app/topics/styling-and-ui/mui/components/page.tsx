import CodeBlock from "@/components/CodeBlock";

export default function MUIComponentsPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">MUI Komponenter</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En guide til de mest anvendte Material-UI komponenter med praktiske
          eksempler og typiske use-cases.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Input Komponenter</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            MUI tilbyder en række input komponenter med indbygget validering og
            states:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`import { 
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Checkbox,
  FormControlLabel
} from '@mui/material';

export function FormExample() {
  return (
    <div>
      {/* Text Input */}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        error={false}
        helperText="Indtast din email adresse"
      />

      {/* Select Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Alder</InputLabel>
        <Select label="Alder" defaultValue="">
          <MenuItem value={10}>Under 18</MenuItem>
          <MenuItem value={20}>18-30</MenuItem>
          <MenuItem value={30}>Over 30</MenuItem>
        </Select>
        <FormHelperText>Vælg din aldersgruppe</FormHelperText>
      </FormControl>

      {/* Checkbox */}
      <FormControlLabel
        control={<Checkbox />}
        label="Jeg accepterer vilkårene"
      />
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Navigation & Layout</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Komponenter til at bygge responsive layouts og navigation:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export function NavigationExample() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Min App
          </Typography>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Hjem" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Feedback & Dialog</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Komponenter til at vise feedback og interagere med brugeren:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';

export function FeedbackExample() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <>
      {/* Dialog/Modal */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Bekræft Handling</DialogTitle>
        <DialogContent>
          Er du sikker på at du vil fortsætte?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Annuller</Button>
          <Button variant="contained" onClick={() => {
            setDialogOpen(false);
            setSnackbarOpen(true);
          }}>
            Bekræft
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">
          Handlingen blev gennemført!
        </Alert>
      </Snackbar>

      {/* Loading Indicator */}
      <CircularProgress />
    </>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Data Visning</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Komponenter til at vise data og lister:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip
} from '@mui/material';

export function DataDisplayExample() {
  return (
    <>
      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Navn</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>
                <Chip label="Aktiv" color="success" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Card */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Produkt Titel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Produkt beskrivelse og detaljer...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Læs Mere</Button>
          <Button size="small" color="primary">
            Køb Nu
          </Button>
        </CardActions>
      </Card>
    </>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">
          Komponent Best Practices
        </h3>
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
              <strong className="block text-xs mb-1">Props Typning</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug TypeScript interfaces til at definere props for bedre
                type-sikkerhed.
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
                Komponent Komposition
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Byg komplekse komponenter ved at kombinere simple MUI
                komponenter.
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
              <strong className="block text-xs mb-1">Tilgængelighed</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug MUIs indbyggede tilgængelighedsfunktioner og ARIA
                attributter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
