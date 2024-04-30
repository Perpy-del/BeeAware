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
      <AlertDialogTrigger asChild>{props.children}</AlertDialogTrigger>
      {props.articleOpenDialog && (
        <AlertDialogContent className="bg-baAccent dark:bg-baPrimary text-baDark mx-auto w-[90%] lg:w-[60%] dark:text-baLight rounded-[20px] p-5 lg:p-14">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-headerSix lg:text-headerFour font-ba_normal">
              You Have to be Logged In to Like, Read Comments or Share Articles
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center font-ba_normal mx-auto w-[80%]">
              Kindly log into your BeeAware account or Create an Account to
              access consultation services and other services on the BeeAware
              dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="text-center flex flex-col lg:flex-row justify-center items-center gap-3">
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
            <AlertDialogCancel className="w-[250px] 3xl:w-[300px] rounded-[20px] border border-baLight h-12">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default ArticleDialogComponent;
