import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { CircularProgress } from '@mui/material';

export function ForgotPasswordDialog() {
  const { forgotPasswordLoading, handleForgotPassword, forgotPasswordDialog } = useBeeawareHook();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex justify-center mt-12 pb-4">
          <Button
            className="w-[95%] hover:scale-105 duration-300 transition transform hover:bg-baPrimary/90 hover:font-ba_medium h-12"
            variant="primary"
            onClick={handleForgotPassword}
          >
            Continue{' '}
            {forgotPasswordLoading && (
              <CircularProgress size={30} style={{ paddingLeft: '5px' }} />
            )}
          </Button>
        </div>
      </AlertDialogTrigger>
      {forgotPasswordDialog && <AlertDialogContent className='bg-baLight dark:bg-baPrimary text-baDark dark:text-baLight'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-center text-headerSix'>You&apos;ve got mail...📧</AlertDialogTitle>
          <AlertDialogDescription className='text-center'>
          Kindly check your mail and click on the link attached to reset your password.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='text-center'>
          <AlertDialogCancel className='rounded-[20px]'>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>}
    </AlertDialog>
  );
}
