import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

import { GlobalStylesComponent } from "./styles/GlobalStylesComponent/GlobalStylesComponent";
import { Home } from "./pages/Home/Home";

import { pxToRem } from "./utils/unitConverter";
import { theme } from "./styles/Theme/main";

import "@fontsource/poppins/500.css";
import "./styles/variables.css";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStylesComponent />

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					px: pxToRem(32),
					overflowX: "hidden",
					width: "100%",
					minHeight: "100vh"
				}}
			>
				<Home />
			</Box>
		</ThemeProvider>
	);
};