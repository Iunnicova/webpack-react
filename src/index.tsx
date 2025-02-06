// import style from "./index.module.scss";

// import "./index.scss";
// import "./assets/images/file.jpg";

// import { ReactComponent as ReactLogo } from "./assets/images/react.svg";

// console.log(style);




import { createRoot } from 'react-dom/client'
import { App } from './components/app'
import { StrictMode } from 'react'

const domNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domNode)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
