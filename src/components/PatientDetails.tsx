import { Patient } from '../types';
import PatientDetailsItems from './PatientDetailsItems';
import { usePatientStore } from '../store';
import { toast } from 'react-toastify';


type PatientDetailsProps = {
  patient: Patient
}


const PatientDetails = ({ patient }: PatientDetailsProps) => {

  const { deletePatient, getPatientbById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error('Paciente Eliminado');
  }

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <PatientDetailsItems label='ID' data={patient.id} />
      <PatientDetailsItems label='Nombre' data={patient.name} />
      <PatientDetailsItems label='Propietario' data={patient.caretaker} />
      <PatientDetailsItems label='Email' data={patient.email} />
      <PatientDetailsItems label='Fecha de Alta' data={patient.date.toString()} />
      <PatientDetailsItems label='Simtomas' data={patient.symptoms} />

      <div className='flex flex-col lg:flex-row gap-3 justify-between  mt-10'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={() => getPatientbById(patient.id)}
        >Editar</button>

        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          onClick={handleClick}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default PatientDetails