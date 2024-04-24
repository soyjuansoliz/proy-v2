import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, Link, useForm  } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const Create = ({ auth }) => {

  const initialValues = {
    name: "",
    avatar: null,
    phone: "",
    visibility: "",
  }

  const {data, errors, setData, post } = useForm(initialValues);

  const submit = (e) => {
    e.preventDefault();
    post(route('contact.store'))
  }

  return (
    <AuthenticatedLayout
      
      user={auth.user}
      header={
        <div className='flex justify-between'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
             create contact
          </h2>
          <Link href={route('contact.index')}>
            contacts
          </Link>
        </div>
      }
    >
        <Head title="Dashboard" />
          <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">
                    crear contactos
                  </div>
              </div>
            </div>
          </div>
    </AuthenticatedLayout>
  );
}

export default Create;