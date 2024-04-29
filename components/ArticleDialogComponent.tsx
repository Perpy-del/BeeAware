import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import ButtonComponent from './ButtonComponent';
import { useRouter } from 'next/navigation';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

type Props = {
  articleOpenDialog: boolean;
  children: React.ReactNode;
};

const ArticleDialogComponent = (props: Props) => {
  const router = useRouter();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {props.children}
      </AlertDialogTrigger>
      {props.articleOpenDialog && (
        <AlertDialogContent className="bg-baLight dark:bg-baPrimary text-baDark rounded-[20px] dark:text-baLight w-[50%]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-headerSix">
              You Have to be Logged In to Like, Read Comments or Share Articles
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Kindly log into your BeeAware account or Create an Account to
              access consultation services and other services on the BeeAware
              dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="text-center flex gap-3">
            <div className="flex justify-center items-center gap-2">
              <ButtonComponent
                variant="baSecondary"
                btnText={'Log In'}
                width={'w-[250px] 3xl:w-[300px]'}
                onClick={() => {
                  router.push('/auth/login');
                }}
              />
            </div>
            <AlertDialogCancel className='w-[250px] rounded-[20px] border border-baLight'>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default ArticleDialogComponent;
