import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel
} from '@/components/ui/alert-dialog';
import ButtonComponent from './ButtonComponent';
import { useRouter } from 'next/navigation';

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
            <AlertDialogContent className="bg-baAccent dark:bg-baPrimary text-baDark w-[90%] lg:w-[60%] dark:text-baLight rounded-[20px] p-5 lg:p-14">
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
              <AlertDialogFooter className="text-center items-center flex sm:flex-col lg:flex-row gap-3">
                <div className="flex justify-center gap-2">
                  <ButtonComponent
                    variant="baSecondary"
                    btnText={'Log In'}
                    width={'w-[250px] 3xl:w-[300px]'}
                    onClick={() => {
                      router.push('/auth/login');
                    }}
                  />
                </div>
                <AlertDialogCancel className='w-[250px] rounded-[20px] h-12 border border-baLight'>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
    <AlertDialog>
  );
};

export default ArticleDialogComponent;
