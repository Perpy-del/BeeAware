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
  import { Button } from '@/components/ui/button';
  import { useBeeawareHook } from '@/hooks/useBeeawareHook';
  import { CircularProgress } from '@mui/material';
  import { useRouter } from 'next/navigation';
  
  export function ResetPasswordDialog() {
    const router = useRouter();

    const { resetPasswordLoading,
        handleResetPassword, resetPasswordDialog } = useBeeawareHook();
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex justify-center mt-12 pb-4">
            <Button
              className="w-[95%] hover:scale-105 duration-300 transition transform hover:bg-baPrimary/90 hover:font-ba_medium h-12"
              variant="primary"
              onClick={handleResetPassword}
            >
              Change Password{' '}
              {resetPasswordLoading && (
                <CircularProgress size={30} style={{ paddingLeft: '5px' }} />
              )}
            </Button>
          </div>
        </AlertDialogTrigger>
        {resetPasswordDialog && <AlertDialogContent className='bg-baLight dark:bg-baPrimary text-baDark dark:text-baLight'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center text-headerSix'>Password Reset Successful</AlertDialogTitle>
            <AlertDialogDescription className='text-center'>
            You can now log into your BeeAware Dashboard using your new password.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className='text-center'>
            <AlertDialogCancel className='rounded-[20px]' onClick={() => router.push('/auth/login')}>Back to Login</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>}
      </AlertDialog>
    );
  }
  