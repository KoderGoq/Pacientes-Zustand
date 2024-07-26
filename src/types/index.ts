export type Patient = { // Definimos el type para la recuperacion de datos del Form
  id: string,
  name: string,
  caretaker: string,
  email: string,
  date: Date,
  symptoms: string
}


export type DraftPatient = Omit<Patient, 'id'> // Tomar un copia del type pero omitiendo un parametro