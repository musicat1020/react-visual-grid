import "./styles.css";
import { Grid } from "react-visual-grid";
import "react-visual-grid/dist/react-visual-grid.css";

export default function App() {
  const images = Array.from({ length: 1500 }, (_, i) => ({
    src: `https://picsum.photos/id/${Math.round(Math.random() * 110)}/800/600`,
    alt: `Image ${i + 1}`
  }));

  return (
    <div className="App">
      <Grid images={images} mode="auto" width={800} height={900} />
    </div>
  );
}
