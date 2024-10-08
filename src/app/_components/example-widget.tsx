import { makeStyles, Button, Combobox, Input, Option } from '@fluentui/react-components'
import { useState } from 'react';
const animals = ["Cat", "Dog", "Fish", "Slug"];

const useStyles = makeStyles({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px"
  },
});

export default function ExampleWidget() {
  const [count, setCount] = useState(0);

  const styles = useStyles();

  const handleButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <div className={styles.root}>
      <h1>Next.js + React + Fluent2</h1>
      <div className={styles.item}>
        <label>Clicker</label>
        <Button onClick={handleButtonClick}>Click me</Button>
        <Input value={`Click count: ${count}`} readOnly />
      </div>
      <div className={styles.item}>
        <label>Favourite Animal</label>
        <Combobox placeholder="Select an option" readOnly={false}>
          {
            animals.map((animal) => (
              <Option key={animal}>{animal}</Option>
            ))
          }
        </Combobox>
      </div>
    </div>
  );
}