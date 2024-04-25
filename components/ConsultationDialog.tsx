import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import ButtonComponent from './ButtonComponent';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type ConsultDialogProps = {
  consultLoading: boolean;
  onConsultClick: () => void;
  showConsult: boolean;
};

export function ConsultationDialog(props: ConsultDialogProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex justify-center">
          <ButtonComponent
            variant="baSecondary"
            btnText={'Book Consultation'}
            width={'w-[250px] 3xl:w-[300px]'}
            onClick={props.onConsultClick}
            loading={props.consultLoading}
          />
        </div>
      </AlertDialogTrigger>
      {props.showConsult && (
        <AlertDialogContent className="bg-baAccent dark:bg-baPrimary text-baDark w-[90%] lg:w-[60%] dark:text-baLight rounded-[20px] p-5 lg:p-14">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-headerSix lg:text-headerFour font-ba_normal">
              Thank You for Booking a Consultation!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center font-ba_normal mx-auto w-[80%]">
              <p className="pb-4">
                Your doctor is{' '}
                <span className="text-baPrimary dark:text-baLight dark:font-ba_medium">
                  Dr. Nwakaego Onyah.
                </span>{' '}
                Click on next to take you to the Consultation Room
              </p>
              <div className="flex justify-center items-center gap-2">
                <ButtonComponent
                  variant="baSecondary"
                  btnText={'Next'}
                  width={'w-[250px] 3xl:w-[300px]'}
                  loading={loading}
                  onClick={() => {
                    setLoading(true);
                    router.push('/dashboard');
                    setLoading(false);
                  }}
                />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
          <h6 className="text-center">
            For more enquiries call: +234 8124 900 0000{' '}
          </h6>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
}
