import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import LogInForm from '../../components/forms/LogInForm';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <Transition.Root as={Fragment} show={true}>
      <Dialog
        open={true}
        onClose={() => navigate(-1)} //* returns to previous page
        as="div"
        className=" flex justify-center items-center fixed inset-0 z-50 "
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgba(25,26,21,0.6)] " />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden flex flex-col max-w-[565px] bg-bg-main rounded-[30px] p-16">
          <LogInForm
            onClose={() => navigate(-1)} //* returns to previous page
          />
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}

export default LoginPage;
