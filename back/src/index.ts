import { writeFileSync } from "fs";
import notesList from "../notesList.json";
interface NoteProps {
  id: number;
  name: string;
  value: number;
  class: string;
  inFlow: boolean;
  date: string;
}

interface classesProps {
  classes: {
    name: string;
    data: { spendingCap: number; expense: number };
    color: string;
  }[];
  total: number;
}

const list: NoteProps[] = notesList;
let data: classesProps = { classes: [], total: 0 };

const RGB = () => {
  const R = Math.round(Math.random() * 255);
  const G = Math.round(Math.random() * 255);
  const B = Math.round(Math.random() * 255);

  const color = `rgb(${R},${G},${B})`;
  return color;
};

list.forEach((note) => {
  const classe = data.classes.find(
    (classData) => classData.name === note.class
  );

  if (classe) {
    classe.data.expense += note.value;
  } else {
    data.classes.push({
      name: note.class,
      data: { expense: note.value, spendingCap: 0 },
      color: RGB(),
    });
  }
  data.total += note.value;
});

data.classes.forEach((classe) => {
  const caraCoroa = Math.round(Math.random() * 1);

  if (caraCoroa === 0) {
    const spendingCap = classe.data.expense / 2;
    classe.data.spendingCap = Math.round(spendingCap);
  } else {
    const spendingCap = classe.data.expense + classe.data.expense / 3;
    classe.data.spendingCap = Math.round(spendingCap);
  }
});

writeFileSync("classes.json", JSON.stringify(data));
