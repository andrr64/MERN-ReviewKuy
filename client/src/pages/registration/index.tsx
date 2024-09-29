import React, { useEffect } from 'react';
import LogoSection from './components/bagian-logo';
import { setTitle } from '../utility';
import {FaArrowLeft} from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import FormRegister from './components/form-register';

const RegisterPage: React.FC = () => {
  useEffect(() => setTitle('Login'), []); // Efek dijalankan sekali ketika komponen di-mount
  const navigate = useNavigate();

  return (
    <div className="bg-red-800 flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-5 laptop:p-10 w-9/12 rounded-md desktop:w-1/3">
        <button onClick={() => navigate(-1)} className="transition duration-300 hover:-translate-x-2 text-left text-gray-600 mb-4 flex items-center">
          <FaArrowLeft className='mr-2'/>
          <span className='text-sm'> Kembali </span>
        </button>
        <LogoSection/>
        <FormRegister/>
      </div>
    </div>
  );
};

export default RegisterPage;
